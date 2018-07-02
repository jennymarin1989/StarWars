import React, { Component } from 'react';

class SearchBar extends Component {
  

  render(){
    return(
      <div>
        <h1>Search People from StarWars</h1>
        <input id="search" value="Enter value to search"/>
      </div>  
    );
  }

}
export default SearchBar;