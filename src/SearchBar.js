import React from 'react'

const searchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='search' value={props.searchTerm} onChange={props.handleSearch}></input>
        <input type='submit' value="Search Shows"></input>
      </form>

    </div>
  )
}

export default searchBar
