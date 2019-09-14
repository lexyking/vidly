import React from 'react';

function Delete(props) {


  return (
    <span className="badge badge-danger"
      onClick={props.handleDelete}
    >
      Delete
      </span>
  )
}

export default Delete
