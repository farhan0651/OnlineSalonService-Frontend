import React from "react";
//import { Link } from "react-router-dom";
import { Box1, SearchCard } from "../styled";
import { Box } from "../styled";
import { StyledServiceCard } from "../ServiceCard/ServiceCard.styled";
const OrderCard = ({ id, billingDate, paymentMethod, salonservice,salonservice1,salonservice2, salonservice3}) => {

  return (
    
    <Box1>
      <table class="table table-striped">
        <tr >
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
            <h3> Offers </h3>
          </td>
          <td>
            <h3> Duration </h3>
          </td>
          <td>
            <h3> PaymentMethod</h3>
          </td>
          <td>
            <h3> BillingDate </h3>
          </td>
        
        </tr>
        <tr>
          <td>
            <p>{id}</p>
          </td>
          <td>
            <p>{salonservice}</p>
          </td>
          <td>
            <p>{salonservice1}</p>
          </td>
          <td>
            <p>{salonservice3}</p>
          </td>
          <td>
            <p>{salonservice2}</p>
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