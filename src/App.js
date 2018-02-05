import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import ShowList from './ShowList'
import MainDisplay from './MainDisplay'

class App extends Component {

  state = {
    searchTerm:'',
    displayShow:'',
    showResults: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch (`http://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`)
    .then(res=>res.json())
    .then(res=> this.setState({showResults: res}))
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.setState({
      searchTerm: e.target.value
    })
  }

  setDisplay = (show) => {
    this.setState({
      displayShow: show
    })
  }

  render() {
    console.log(this.state.showResults)
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
        <ShowList showResults={this.state.showResults} setDisplay={this.setDisplay}/>
        <MainDisplay displayShow={this.state.displayShow} />
      </div>
    );
  }
}

export default App;
