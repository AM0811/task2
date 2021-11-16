import React from 'react';


// 1 Component MedicalTreatment.js
//  creating a function called MedicalTreatment with its parameters.
export default function MedicalTreatment(props){
  return(
    <div>
      {props.name} {props.treatId} {props.treatCourseId} {props.type} {props.category}  {props.startDate}      
      </div>
  )
}