import React, { Component } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import StarWarsPage from '../components/StarWarsPage';
import {Grid, Row}  from 'react-bootstrap';
import Image from '../dark.jpg';
import './styleComponents/App.css';

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
      starwars: !false
    })
  }
 
  render () {
    return (
      <Grid 
        width={500}
        align="center"
        className="grid-style"
        style={{backgroundImage: `url(${Image})`}} >
          <Row width={100} className = "row-title">
            <Title header = {"LEGO"}/>
          </Row> 
          <Row width={100} className="row-button"> 
            <Button 
              image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"}
              onClick={this.handleClick}
            />
          </Row>  
          <Row width={120} className="stars-page">  
            {this.state.starwars ? <StarWarsPage /> : null}
          </Row> 
      </Grid>
    )
  }
  
}

export default App;