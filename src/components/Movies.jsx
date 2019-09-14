import React from 'react';
import { Pagination, ListGroup } from '../common/index';
import { paginate } from '../utils/index'
import { MoviesTable } from './index';
import _ from 'lodash';


const Movies = (props) => {

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
    } = props;

    if (movies.length === 0) return <p>There are no movies in the database</p>

    const filteredMovies = (selectedGenre.name && selectedGenre._id) ? movies.filter(m => m.genre._id === selectedGenre._id) : movies

    const sorted = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])

    const allMovies = paginate(sorted, currentPage, pageSize)
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
                <p>There are {filteredMovies.length} movies in the database</p>
                <main className="container">
                    <MoviesTable
                        sortColumn={sortColumn}
                        allMovies={allMovies}
                        onLike={(movie) => onLike(movie)}
                        onDelete={(movie) => onDelete(movie)}
                        onSort={(path) => onSort(path)}
                    />
                    <Pagination
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={(page) => onPageChange(page)}
                    />
                </main>

            </div>

        </div>
    )

}

export default Movies
