import React from "react";
import Table from 'react-bootstrap/Table';
import Myprofile1 from "../../pages/MyProfile1";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MyprofileGrid1 = ({ data }) => {
  return (
    <div class="col d-flex justify-content-center">
        
      {data.map((Myprofile1) => (
         <Card style={{ width: '18rem' }}>
         <Card.Header><b>DETAILS</b></Card.Header>
         <ListGroup variant="flush">
           <ListGroup.Item>Customer Id - {Myprofile1.userId}</ListGroup.Item>
           <ListGroup.Item>Name -{Myprofile1.name}</ListGroup.Item>
           <ListGroup.Item>Email -{Myprofile1.email}</ListGroup.Item>
           <ListGroup.Item>DOB -{Myprofile1.dob}</ListGroup.Item>
           <ListGroup.Item>Contact_No -{Myprofile1.contactNo}</ListGroup.Item>
         </ListGroup>
       </Card>
      ))} 
    </div>
  );
};

export default MyprofileGrid1;