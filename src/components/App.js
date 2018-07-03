import React, { Component } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import StarWarsPage from '../components/StarWarsPage';
import {Grid, Row}  from 'react-bootstrap';
import Image from '../dark.jpg';

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
        style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '-webkit-fill-available'}} >
          <Row width={150} style={{backgroundColor: 'white', paddingBottom:'10px' }}>
            <Title header = {"LEGO"}/>
          </Row> 
          <Row width={100} style={{marginTop: '100px'}}> 
            <Button 
              image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"}
              onClick={this.handleClick}
            />
          </Row>  
          <Row width={120} style={{marginTop: '50px'}}>  
            {this.state.starwars ? <StarWarsPage /> : null}
          </Row> 
      </Grid>
    )
  }
  
}

export default App;