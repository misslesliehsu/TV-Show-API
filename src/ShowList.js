import React from 'react'
import ShowListItem from './ShowListItem'
import Episode from './Episode'
import MainDisplay from './MainDisplay'

export default class ShowList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      episodes:[],
      filter: '',
      displayShow:''
    }
  }

  setDisplay = (show) => {
    this.setState({
      displayShow: show
    })
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
      return this.state.episodes.map(e => <Episode key={e.id} episode={e}/>)
    }
    else {
     return this.state.episodes.filter( e=> e.name.includes(this.state.filter)).map(e => <Episode key={e.id} episode={e}/>)
   }
  }

  render() {
    const shows = this.props.showResults.map( showObject => <ShowListItem key={showObject.show.id} show={showObject.show} setDisplay={this.setDisplay} showEpisode={this.showEpisode}/>)

    return (
      <div style={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
        <div>
          {shows}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '18% 2% auto'}} >
          <div>
            <MainDisplay displayShow={this.state.displayShow} />
          </div>
          <div>
            <input type='text' value={this.state.filter} placeholder='filter shows' onChange={this.setFilter} style={{display: this.state.episodes.length > 0 ? "block": "none", margin: '0 auto'}}></input>
          </div>
          <div>
            {this.episodesToShow()}
          </div>
        </div>
      </div>
    )
  }
}
