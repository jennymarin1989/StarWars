import React from 'react';
import './styleComponents/PeopleDetail.css'


const PeopleDetail = (props) => {

  const peopleDetails = props.details.map((detail, index) => {
    return (
    <div key={ index }>
      <p>{ detail[0] }, height: { detail[2] }, birth-year: { detail[6] }, gender: { detail[7] }</p> 
    </div>
    );
  });
  
  return (
    <div>
     <p className="detail"> { peopleDetails } </p> 
    </div>  
  );
}

export default PeopleDetail;