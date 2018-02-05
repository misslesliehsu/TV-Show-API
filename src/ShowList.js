import React from 'react'
import ShowListItem from './ShowListItem'


const ShowList = (props) => {

  const shows = Object.values(props.showResults).map( showObject => <ShowListItem key={showObject.show.id} show={showObject.show} setDisplay={props.setDisplay}/>)


  return (
    <div>{shows}</div>
  )
}

export default ShowList
