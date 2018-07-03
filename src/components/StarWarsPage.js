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
      data.results = data.results.map ((detail) =>{
        detail.id = detail.name
        return Object.values(detail)
      })    
      this.setState({ people: data.results})
    });
  }

  render () {
    
    return (
      <div>
        <SearchBar 
          onSearch = { search => {this.componentDidMount(search)}}/>
        <PeopleDetail 
          details= {this.state.people} />
      </div>  
    );
  }
}

export default StarWarsPage;