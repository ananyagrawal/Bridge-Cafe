import React from "react";
import OrderHeader from "../layouts/Header/OrderHeader.jsx";
import AddressSection from "../layouts/Order/AddressSection.jsx";
import PopularItems from "../layouts/Order/PopularItems.jsx";
import Menu from "../layouts/Order/Menu.jsx";
import { AuthContextProvider } from "../context/AuthContext.jsx";
import { CartContextProvider } from "../context/CartContext.jsx";
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
