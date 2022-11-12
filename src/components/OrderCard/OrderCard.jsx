import React from "react";
//import { Link } from "react-router-dom";
import { Box1 } from "../styled";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderGrid from "./OrderGrid";
import Services from "../../pages/Services";

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
    fetch(`http://localhost:8756/orders/deleteOrder/${id}`, {
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
    <div className="col-sm-6 col-md-4">
      <div className="card border-white card text-bg-light">
        <div className="card-header">
          <b>My Orders</b>
        </div>
        <div className="card-body">
          <p className="card-text">Order Id - {id}</p>
          <p className="card-text">Service- {appointment}</p>
          <p className="card-text"> Amount - {appointment3}</p>
          <p className="card-text">Offer(%)- {discount}</p>
          <p className="card-text">Paymentstatus- {appointment1}</p>
          <p className="card-text">PaymentMethod- {paymentMethod}</p>
          <p className="card-text">BillingDate- {billingDate}</p>
          <div className="btns">
            <Link to={`/Services`}>Book Again</Link>
          </div>
          <Button onClick={ClickHandle} variant="primary">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;