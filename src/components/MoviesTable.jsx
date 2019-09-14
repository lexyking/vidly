import React from 'react';
import { Delete } from './index';
import { Like } from '../common/index';


const MovieTable = (props) => {

  const {
    allMovies,
    onLike,
    onDelete,
    onSort
  } = props

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" onClick={() => onSort("title")}>Title</th>
          <th scope="col" onClick={() => onSort("genre.name")}>Genre</th>
          <th scope="col" onClick={() => onSort("numberInStock")}>In Stock</th>
          <th scope="col" onClick={() => onSort("dailyRentalRate")}>Daily Rental</th>
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

export default MovieTable
