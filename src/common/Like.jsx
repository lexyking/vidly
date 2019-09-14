import React, { Fragment } from 'react'

function Like(props) {

  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <Fragment>
      <i className={classes} aria-hidden="true"
        onClick={props.onClick}
      ></i>
    </Fragment>
  )
}

export default Like
