import React from 'react';


const PeopleDetail = (props) => {

  const peopleDetails = props.details.map((detail, index) => {
    return (
    <div key={index}>
      <p>{detail[0]}, height: {detail[2]}, birth-year: {detail[6]}, gender: {detail[7]}</p> 
    </div>
    );
  });
  
  return (
    <div>
     <p style={{fontFamily: 'verdana', fontWeight: 'bold', fontSize: '1.1em', color:'#FFD700'}}>{peopleDetails}</p> 
    </div>  
  );
}

export default PeopleDetail;