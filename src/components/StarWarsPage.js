import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

class StarWarsPage extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
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