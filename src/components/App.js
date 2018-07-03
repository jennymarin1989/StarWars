import React, { Component } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import StarWarsPage from '../components/StarWarsPage';
import {Grid, Row , Col}  from 'react-bootstrap';
import Image from '../starwars4.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      starwars: false
    }
   
    this.handleClick= this.handleClick.bind(this) 
  }
  
  handleClick() {
    this.setState ({
      starwars: true
    })
  }
 
  render () {
    return (
      <Grid 
        width={500}
        align="center"
        style={{backgroundImage: `url(${Image})`, 
                backgroundPosition: 'center', 
                width: '100%', 
                height: '-webkit-fill-available',
                }} >
        <Row width={120} style={{backgroundColor: 'white', height:'50%' }}>
          <Title header = {"LEGO"}/>
        </Row> 
        <Row> 
          <Button 
            image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"}
            onClick={this.handleClick}
          />
          {this.state.starwars ? <StarWarsPage /> : null}
        </Row>  
      </Grid>
    )
  }
  
}

export default App;