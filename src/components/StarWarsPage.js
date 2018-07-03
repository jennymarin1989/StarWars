import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import PeopleDetail from '../components/PeopleDetail';


class StarWarsPage extends Component {
  constructor(){
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount(search){
    fetch(`https://swapi.co/api/people/?search=${search}`).then((res) => {
      return res.json();
    }).then((data) => {
      data.results[0];
      this.setState({ people: data.results[0]})
    });
  }

  render () {
    return (
      <div>
        <SearchBar onSearch = { search => {this.componentDidMount(search)}}/>
        <PeopleDetail />
      </div>  
    );
  }
}

export default StarWarsPage;