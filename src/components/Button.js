import React from 'react';
import StyleButton from './styleComponents/StyleButton';


const Button = (props) => {

  return (

    <div>
      <StyleButton>
        <button 
          id='homepage-button' 
          onClick={props.onClick}>
            <img src={props.image} style={{width:'120px', height: '100px'}} alt="starwars"/>
        </button>
      </StyleButton >
    </div>  
  )
}
export default Button;