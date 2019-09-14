import React, { Component } from 'react';
import { Delete } from '../components/index';
import { Like } from '../common/index';
import PropTypes from 'prop-types';


export class TableBody extends Component {
  render() {

    const {
      data,
      onLike,
      onDelete
    } = this.props;

    return (
      <tbody>
        {data.map((movie, index) => {
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
    )
  }
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TableBody
