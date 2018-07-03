import React from 'react';


const PeopleDetail = (props) => {
  const peopleDetails = props.details.map((detail, index) =>{
   return (
    <div key={index}><h2>name:{detail[0]} mass:{detail[1]} height:{detail[2]}</h2> </div>
   );
  })
  return (
    <div>
     <h1>{peopleDetails}</h1> 
    </div>  
  );
}

export default PeopleDetail;