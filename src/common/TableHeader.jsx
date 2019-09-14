import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TableHeader extends Component {
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

  renderSortIcon = column => {
    const { sortColumn } = this.props
    if (column.path !== sortColumn.path) return null;
    if (!column.path) return null
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />
    return <i className="fa fa-sort-desc" />
  }

  render() {
    const {
      columns
    } = this.props;

    return (
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          {columns.map(column =>
            <th key={column.path || column.key} scope="col"
              className="clickable"
              onClick={() => this.raisedSort(column.path)}>
              {column.label || column.key} {this.renderSortIcon(column)}
            </th>
          )}
        </tr>
      </thead>
    )

  }
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired
}

export default TableHeader
