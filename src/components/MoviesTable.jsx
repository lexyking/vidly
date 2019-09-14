import React, { Component } from 'react';
import { TableHeader, TableBody } from '../common/index';


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

export default MoviesTable
