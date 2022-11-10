import React from "react";
import Myprofilecard from "./Myprofilecard";
import { Box, Box1 } from "../styled";
import Myprofile from "../../pages/Myprofile";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MyprofileGrid = ({ data }) => {
  
  return (
    <Box>
      <div className="row p-5"  >
      {data.map((Myprofile) => (
        <Myprofilecard
          key={Myprofile.userId}
          id={Myprofile.userId}
          Email={Myprofile.email}
          Dob={Myprofile.dob}
          Contact={Myprofile.contactNo}
          Name={Myprofile.name}
        />
      ))}
      </div>
    </Box>
  );
};

export default MyprofileGrid;