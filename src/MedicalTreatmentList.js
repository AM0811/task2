import React from 'react';
function MedicalTreatmentList(){
  return(
    <li key= {props.treatId} > {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} </li>
  );

}
export default MedicalTreatmentList;
