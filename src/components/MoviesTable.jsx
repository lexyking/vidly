import React, { Component } from 'react';
import { Delete } from './index';
import { Like, TableHeader } from '../common/index';


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
        <tbody>
          {allMovies.map((movie, index) => {
            const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
            return (
              <tr key={_id}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{genre.name}</td>
                <td>{numberInStock}</td>
                <td>{dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
                <td><Delete handleDelete={() => onDelete(movie)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

}

export default MoviesTable
