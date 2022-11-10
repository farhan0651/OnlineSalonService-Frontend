import React from "react";

import OrderCard from "./OrderCard";
import { Box } from "../styled";

const OrderGrid = ({ data }) => {
  return (
    <Box>
      <div className="row p-5">
        {data.map((order) => (
          <OrderCard
            key={order.orderId}
            id={order.orderId}
            billingDate={order.billingDate}
            paymentMethod={order.paymentMethod}
            discount={order.appointment.salonService.discount}
            appointment={order.appointment.salonService.serviceName}
            appointment1={order.appointment.payment.status}
            appointment3={order.appointment.salonService.servicePrice}
          />
        ))}
      </div>
    </Box>
  );
};

export default OrderGrid;