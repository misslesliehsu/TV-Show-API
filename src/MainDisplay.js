import React from 'react'

const MainDisplay = (props) => {

  let output = () => {
    if (props.displayShow) {return <img src={props.displayShow.image.medium} alt="tv-show"></img>}
    else {return ""}
  }

  return (
    <div style={{marginTop: '50px'}}>
      {output()}
    </div>
  )
}

export default MainDisplay
