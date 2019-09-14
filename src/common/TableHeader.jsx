import React, { Component } from 'react'

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

  render() {
    const {
      columns
    } = this.props;

    return (
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          {columns.map(column =>
            <th key={column.path || column.key} scope="col" onClick={() => this.raisedSort(column.path)}>{column.label || column.key}</th>
          )}
        </tr>
      </thead>
    )

  }



}

export default TableHeader
