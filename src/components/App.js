import React, { Component } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';

class App extends Component {
  constructor(){
    super();
    this.state = {
      starwars: false
    }
  }
 
  render () {
    return (
      <div>
        <Title header = {"LEGO"}/>
        <Button 
        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"}/>
      </div>  
    )
  }
  
}

export default App;