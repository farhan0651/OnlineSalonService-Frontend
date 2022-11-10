import React from "react";

import OrderCard from "./OrderCard";
import { Box } from "../styled";

const OrderGrid = ({ data }) => {
  return (
    <Box>
      {data.map((order) => (
        <OrderCard
          key={order.orderId}
          id={order.orderId}
          billingDate={order.billingDate}
          paymentMethod={order.paymentMethod}
          discount={order.appointment.salonService.discount}
          appointment={order.appointment.salonService.serviceName}
          appointment1={order.appointment.visitType}
          appointment3={order.appointment.salonService.servicePrice}
        />
      ))}
    </Box>
  );
};

export default OrderGrid;