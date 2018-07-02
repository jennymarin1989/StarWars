import React from 'react';



const Button = (props) => {

  return (

    <div>
      <button id='homepage-button'><img src={props.image} alt="starwars" width="80px"/></button>
    </div>  
  )
}
export default Button;