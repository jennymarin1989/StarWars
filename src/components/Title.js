import React from 'react';
import StyleTitle from './styleComponents/StyleTitle';
import './styleComponents/Title.css';

const Title = (props) => {

  return (

    <div>
      <StyleTitle>
         <h1 className="title"> { props.header } </h1>
      </StyleTitle>
    </div>  

  )

}

export default Title;