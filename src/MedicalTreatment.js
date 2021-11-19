//Question 2

import React from 'react';
function MedicalTreatment(props){
  return(
    <li key= {props.treatId} > {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} </li>
  );

}
export default MedicalTreatment;
