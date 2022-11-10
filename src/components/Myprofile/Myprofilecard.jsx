import React from "react";
//import { Link } from "react-router-dom";
import { Box1, SearchCard } from "../styled";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


import { useState, useEffect } from "react";
const Myprofilecard = ({ id,Email,Dob,Contact,Name}) => {
  
   const [setStatus] = useState(null);
   const [setErrorMessage] = useState(null);
   
  const OnDelete = ()=> {
    // DELETE request using fetch with error handling
    fetch(`http://localhost:8000/Customer/deleteCustomer/${id}`, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setStatus('Delete successful');
        })
        .catch(error => {
            setErrorMessage(error);
            console.error('There was an error!', error);
        });
};
const ClickHandle = () => {

  OnDelete();
  window.location.reload(false);
}


  return (
    
    
   

        <div className="col-sm-6 col-md-4">
            <div className="card border-white card text-bg-light" >
                <div className="card-header"><b>Details</b></div>
                    <div className="card-body">
                        <p className="card-text">Customer Id - {id}</p>
                        <p className="card-text">Name- {Name}</p>
                        <p className="card-text">Email- {Email}</p>
                        <p className="card-text">DOB- {Dob}</p>
                        <p className="card-text">Contact- {Contact}</p>
  
                        <Button onClick={ClickHandle} variant="primary">Delete</Button>

                    </div>
                </div>
            </div>
       


    /*<Box1>
      <table >
        <tr >
          <td>
            <h3> CustomerId </h3>
          </td>

          <td>
            <h3>Email</h3>
          </td>

          <td>
            <h3> Dob </h3>
          </td>

          <td>
            <h3> Contact </h3>
          </td>
          <td>
            <h3> Name </h3>
          </td>
          <td>
          <button onClick={ClickHandle}>Delete</button>
          </td>
         
        </tr>
       
        <tr>
          <td>
            <p>{id}</p>
          </td>
          <td>
            <p>{Email}</p>
          </td>
          <td>
            <p>{Dob}</p>
          </td>
          <td>
            <p>{Contact}</p>
          </td>
          <td>
            <p>{Name}</p>
          </td>

        </tr>
      </table>
    </Box1>*/
  );
};

export default Myprofilecard;