import React from "react";
//import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
const OrderCard = ({
  id,
  billingDate,
  paymentMethod,
  appointment,
  appointment1,
  discount,
  appointment3,
}) => {
  const ClickHandle = () => {
    axios
      .delete(`http://localhost:8000/orders/deleteOrder/${id}`)
      .then((data) => {
        console.log(data.data);
        alert("successfully deleted");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        document.getElementById(
          "error"
        ).innerHTML = `There was an error! ${error}`;
        //window.location.reload(false);
      });
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
            <Link data-testid="links" to={`/Appointments`}>
              Book Again
            </Link>
          </div>

          <Button data-testid="button" onClick={ClickHandle} variant="primary">
            Delete
          </Button>
          <div style={{ color: "red", fontSize: "13px" }} id="error"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;