import React, { Component } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';

class App extends Component {
 
  render () {
    return (
      <div>
        <Title header = {"LEGO"}/>
        <Button />
      </div>  
    )
  }
  
}

export default App;