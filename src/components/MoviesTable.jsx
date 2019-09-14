import React, { Component } from 'react';
import { Delete } from './index';
import { Like } from '../common/index';


class MoviesTable extends Component {



  raisedSort = (path) => {
    const sortColumn = { ...this.props.sortColumn }
    if (sortColumn.path === path) {
      sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc"
    }
    else {
      sortColumn.path = path;
      sortColumn.order = "asc"
    }
    this.props.onSort(sortColumn)
  }
  render() {

    const {
      allMovies,
      onLike,
      onDelete,
    } = this.props

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => this.raisedSort("title")}>Title</th>
            <th scope="col" onClick={() => this.raisedSort("genre.name")}>Genre</th>
            <th scope="col" onClick={() => this.raisedSort("numberInStock")}>In Stock</th>
            <th scope="col" onClick={() => this.raisedSort("dailyRentalRate")}>Daily Rental</th>
            <th scope="col">Liked</th>
            <th scope="col"></th>

          </tr>
        </thead>
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
