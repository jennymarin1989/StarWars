import React, { Component } from 'react';

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
        <h1>Search People from StarWars</h1>
        <input id="search" value={this.props.state} onChange={this.handleChange}/>
      </div>  
    );
  }

}
export default SearchBar;