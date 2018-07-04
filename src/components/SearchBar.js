import React, { Component } from 'react';
import './styleComponents/searchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputSearch: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      inputSearch: event.target.value
    });
    this.props.onSearch(event.target.value);
  }

  render(){
    return(
      <div>
        <input 
          id="search" 
          placeholder="Enter a name" 
          value={this.props.state} 
          onChange={this.handleChange}
          className="search-bar"
        />
      </div>  
    );
  }

}
export default SearchBar;