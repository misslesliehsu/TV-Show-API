import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import ShowList from './ShowList'

class App extends Component {

  state = {
    searchTerm:'',
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



  render() {
    console.log(this.state.showResults)
    return (
      <div className="App" style={{display: 'grid', gridTemplateRows: "10% 10% auto"}}>
        <img src={logo} className="App-logo" alt="logo" style={{margin: '0 auto'}} />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
        <ShowList showResults={this.state.showResults}/>
      </div>
    );
  }
}

export default App;
