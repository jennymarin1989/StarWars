import React from 'react';
import StyleButton from './styleComponents/StyleButton';
import './styleComponents/Button.css'


const Button = (props) => {

  return (

    <div>
      <h2 className="button-header">Click here to search for People!</h2>
      <StyleButton>
        <button 
          id='homepage-button' 
          onClick={props.onClick}>
            <img src={props.image} className="button-image" alt="starwars"/>
        </button>
      </StyleButton >
    </div>  
  )
}
export default Button;