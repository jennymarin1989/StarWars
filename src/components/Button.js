import React from 'react';


const Button = (props) => {

  return (

    <div>
      <button 
        style={{width:'120px', height:'100px', marginTop:'150px', paddingLeft:'0px', paddingRight:'0px'}} 
        id='homepage-button' 
        onClick={props.onClick}><img src={props.image} style={{width:'120px', height: '100px'}} alt="starwars"/>
      </button>
    </div>  
  )
}
export default Button;