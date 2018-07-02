import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';


class StarWarsPage extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/?search=r2').then((res) => {
      return res.json();
    }).then((data) => {
      data.results[0];
      this.setState({ people: data.results[0]})
    });
  }

  render () {
    return (
      <div>
        <SearchBar />
      </div>  
    );
  }
}

export default StarWarsPage;