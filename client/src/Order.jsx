import React from "react";
import OrderHeader from "./OrderHeader.jsx";
import AddressSection from "./order page sections/AddressSection";
import PopularItems from "./order page sections/PopularItems";
import Menu from "./order page sections/Menu";
import { AuthContextProvider } from "./AuthContext.jsx";
const Order = () => {
  return (
    <div>
      <AuthContextProvider>
        <OrderHeader />
        <AddressSection />
        <PopularItems />
        <Menu />
      </AuthContextProvider>
      <div style={{ height: "50px", backgroundColor: "#296159" }}></div>
    </div>
  );
};
export default Order;
