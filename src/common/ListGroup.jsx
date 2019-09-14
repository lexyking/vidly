import React from 'react';
import PropTypes from 'prop-types';

function ListGroup({ itemsList, onGenreSelect, valueProperty, idProperty, selectedGenre }) {

  return (
    <ul className="list-group">
      {itemsList.map(item =>
        <li
          key={item[idProperty]}
          onClick={() => onGenreSelect(item)}
          className={item === selectedGenre ? "list-group-item active" : "list-group-item"}
        >
          {item[valueProperty]}
        </li>)}
    </ul>
  )
}

ListGroup.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  selectedGenre: PropTypes.object.isRequired

}

ListGroup.defaultProps = {
  valueProperty: "name",
  idProperty: "_id"
}
export default ListGroup
