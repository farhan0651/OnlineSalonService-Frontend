import React from "react";
//import { Link } from "react-router-dom";
import { Box1 } from "../styled";

import { useState } from "react";
const OrderCard = ({
  id,
  billingDate,
  paymentMethod,
  appointment,
  appointment1,
  discount,
  appointment3,
}) => {
  const [setStatus] = useState(null);
  const [setErrorMessage] = useState(null);

  const OnDelete = () => {
    // DELETE request using fetch with error handling
    fetch(`http://localhost:8000/orders/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        setStatus("Delete successful");
      })
      .catch((error) => {
        setErrorMessage(error);
        console.error("There was an error!", error);
      });
  };
  const ClickHandle = () => {
    OnDelete();
    window.location.reload(false);
  };

  return (
    <Box1>
      <table>
        <tr>
          <td>
            <h3> OrderId </h3>
          </td>

          <td>
            <h3>Service</h3>
          </td>

          <td>
            <h3> Amount </h3>
          </td>
          <td>
            <h3> Offer(%) </h3>
          </td>
          <td>
            <h3> VisitType </h3>
          </td>

          <td>
            <h3> PaymentMethod</h3>
          </td>
          <td>
            <h3> BillingDate </h3>
          </td>
          <button onClick={ClickHandle}>X</button>
        </tr>
        <tr>
          <td>
            <p>{id}</p>
          </td>
          <td>
            <p>{appointment}</p>
          </td>
          <td>
            <p>{appointment3}</p>
          </td>
          <td>
            <p>{discount}</p>
          </td>

          <td>
            <p>{appointment1}</p>
          </td>

          <td>
            <p>{paymentMethod}</p>
          </td>
          <td>
            <p>{billingDate}</p>
          </td>
        </tr>
      </table>
    </Box1>
  );
};

export default OrderCard;