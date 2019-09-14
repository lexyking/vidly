import React, { Component } from 'react';
import { TableHeader, TableBody } from '../common/index';
import PropTypes from 'prop-types';



class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "In Stock" },
    { path: "dailyRentalRate", label: "Daily Rental" },
    { key: "Like" },
    { key: "Delete" },
  ]

  render() {

    const {
      allMovies,
      onLike,
      onDelete,
      onSort,
      sortColumn
    } = this.props

    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />

        <TableBody
          data={allMovies}
          onLike={onLike}
          onDelete={onDelete}
        />

      </table>
    )
  }

}

MoviesTable.propTypes = {
  allMovies: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortColumn: PropTypes.object.isRequired
}

export default MoviesTable
