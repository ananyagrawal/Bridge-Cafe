import React from "react";
import OrderHeader from "./OrderHeader.jsx";
import AddressSection from "./order page sections/AddressSection";
import PopularItems from "./order page sections/PopularItems";
import Menu from "./order page sections/Menu";
import { AuthContextProvider } from "./AuthContext.jsx";
import { CartContextProvider } from "./CartContext.jsx";
const Order = () => {
  return (
    <div>
      <AuthContextProvider>
        <CartContextProvider>
          <OrderHeader />
          <AddressSection />
          <PopularItems />
          <Menu />
        </CartContextProvider>
      </AuthContextProvider>
      <div style={{ height: "50px", backgroundColor: "#296159" }}></div>
    </div>
  );
};
export default Order;
