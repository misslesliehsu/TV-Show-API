import React from 'react'
import ShowListItem from './ShowListItem'
import Episode from './Episode'

export default class ShowList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      episodes:[],
      filter: ''
    }
  }

 showEpisode = (id) => {
    fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then(res=>res.json())
    .then(res=> this.setState({episodes: res}))
  }

  setFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  episodesToShow = () => {
    if (!this.state.filter) {
      return this.state.episodes.map(e => <Episode episode={e}/>)
    }
    else {
     return this.state.episodes.filter( e=> e.name.includes(this.state.filter)).map(e => <Episode episode={e}/>)
   }
  }

  render() {
    const shows = this.props.showResults.map( showObject => <ShowListItem key={showObject.show.id} show={showObject.show} setDisplay={this.props.setDisplay} showEpisode={this.showEpisode}/>)

    return (
      <div>
        <input type='text' value={this.state.filter} onChange={this.setFilter} style={{display: this.state.episodes.length > 0 ? "block": "none"}}></input>
        {shows}
        {this.episodesToShow()}
      </div>
    )
  }
}
