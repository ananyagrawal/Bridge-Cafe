import React from "react";
import OrderHeader from "./OrderHeader.jsx";
const Order = () => {
  return (
    <div>
      <OrderHeader />
      <h1
        style={{
          textAlign: "center",
          marginTop: "8rem",
        }}
      >
        Order Online
      </h1>
    </div>
  );
};
export default Order;
