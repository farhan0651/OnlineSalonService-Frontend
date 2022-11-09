import React from "react";

import OrderCard from "./OrderCard";
import { Box, Box1 } from "../styled";
const OrderGrid = ({ data }) => {
  return (
    <Box>
      {data.map((order) => (
        <OrderCard
          key={order.orderId}
          id={order.orderId}
          billingDate={order.billingDate}
          paymentMethod={order.paymentMethod}
          salonservice={order.salonservice.serviceName}
          salonservice1={order.salonservice.servicePrice}
          salonservice2={order.salonservice.serviceDuration}
          salonservice3={order.salonservice.discount}
        />
      ))}
    </Box>
  );
};

export default OrderGrid;