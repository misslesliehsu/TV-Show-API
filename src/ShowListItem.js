import React from 'react'

const showListItem = (props) => {
  return (
    <div>
      <div onClick={() => {props.setDisplay(props.show)}}>
        <h2>{props.show.name}</h2>
        {props.show.summary}
      </div>
    </div>
  )
}

export default showListItem
