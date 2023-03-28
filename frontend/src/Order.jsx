import React from "react";
import OrderHeader from "./OrderHeader.jsx";
import AddressSection from "./order page sections/AddressSection";
import PopularItems from "./order page sections/PopularItems";
const Order = () => {
  return (
    <div>
      <OrderHeader />
      <AddressSection />
      <PopularItems />
    </div>
  );
};
export default Order;
