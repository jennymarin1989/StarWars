import React from 'react';
import StyleTitle from './styleComponents/StyleTitle';

const Title = (props) => {

  return (

    <div>
      <StyleTitle>
         <h1 style={{ backgroundColor: 'red', display: 'inline' }}> { props.header } </h1>
      </StyleTitle>
    </div>  

  )

}

export default Title;