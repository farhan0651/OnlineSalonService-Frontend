import React from "react";
import Table from 'react-bootstrap/Table';

const MyprofileGrid = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Customer_Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
      {data.map((Myprofile) => (
        <tr>
        <td>{Myprofile.customerId}</td>
        <td>{Myprofile.name}</td>
        <td>{Myprofile.email}</td>
        <td>{Myprofile.dob}</td>
      </tr>
      ))}
      </tbody>
      </Table>
    </div>
  );
};

export default MyprofileGrid;