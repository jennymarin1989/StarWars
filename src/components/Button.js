import React from 'react';
import StyleButton from './styleComponents/StyleButton';
import './styleComponents/Button.css'


const Button = (props) => {

  return (

    <div>
      <StyleButton>
      <h2 className="button-header">CLick here to search for People!</h2>
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