import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputSearch: ''
    }
  }

  render(){
    return(
      <div>
        <h1>Search People from StarWars</h1>
        <input id="search" value={this.props.state}/>
      </div>  
    );
  }

}
export default SearchBar;