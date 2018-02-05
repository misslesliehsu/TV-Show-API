import React from 'react'

const showListItem = (props) => {
  return (
    <div>
      <div onClick={() => {props.setDisplay(props.show)}}>
        <h2>{props.show.name}</h2>
        {props.show.summary}
        <button type='button' onClick={() => {props.showEpisode(props.show.id)}}>Show Me All Episodes</button>
      </div>
    </div>
  )
}

export default showListItem
