import React, { Component } from 'react';
import { Pagination, ListGroup } from '../common/index';
import { paginate } from '../utils/index'
import { MoviesTable } from './index';
import _ from 'lodash';
import PropTypes from 'prop-types';



class Movies extends Component {

    getPageData = () => {
        const {
            movies,
            pageSize,
            currentPage,
            selectedGenre,
            sortColumn
        } = this.props;

        const filteredMovies = (selectedGenre.name && selectedGenre._id) ? movies.filter(m => m.genre._id === selectedGenre._id) : movies
        const sorted = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])
        const allMovies = paginate(sorted, currentPage, pageSize)
        return { totalCount: filteredMovies.length, data: allMovies }
    }

    render() {
        const {
            movies,
            pageSize,
            onPageChange,
            currentPage,
            genres,
            onLike,
            onDelete,
            onSort,
            onGenreSelect,
            selectedGenre,
            sortColumn
        } = this.props;

        const { totalCount, data: allMovies } = this.getPageData();

        if (movies.length === 0) return <p>There are no movies in the database</p>

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        selectedGenre={selectedGenre}
                        itemsList={genres}
                        onGenreSelect={(genre) => onGenreSelect(genre)}
                    />
                </div>
                <div className="col">
                    <p>There are {totalCount} movies in the database</p>
                    <main className="container">
                        <MoviesTable
                            sortColumn={sortColumn}
                            allMovies={allMovies}
                            onLike={(movie) => onLike(movie)}
                            onDelete={(movie) => onDelete(movie)}
                            onSort={(path) => onSort(path)}
                        />
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={(page) => onPageChange(page)}
                        />
                    </main>

                </div>

            </div>
        )
    }
}


Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    onLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    onGenreSelect: PropTypes.func.isRequired,
    selectedGenre: PropTypes.object.isRequired,
    sortColumn: PropTypes.object.isRequired
}
export default Movies
