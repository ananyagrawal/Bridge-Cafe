import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });
  const menuDataMap = new Map(menuData.map((item) => [item._id, item]));
  console.log(menuDataMap);
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_content}>
        <div className={styles.top_section}>
          <div className={styles.top_section_left}>
            <h1>YOUR ORDER</h1>
            <p>
              {cartItems?.reduce((total, item) => {
                return total + item.quantity;
              }, 0)}{" "}
              items
            </p>
          </div>
          <div className={styles.top_section_right}>
            <IoMdClose size={20} />
          </div>
        </div>
        <div>
          {cartItems.map((cartItem) => {
            const item = menuDataMap.get(cartItem.itemId);
            return (
              <div key={cartItem.itemId}>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <button onClick={() => removeFromCart(cartItem.itemId)}>
                  Remove
                </button>
              </div>
            );
          })}
          {/* {cartItems.map((item) => (
            <div key={item.itemId}>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <button onClick={() => removeFromCart(item.itemId)}>
                Remove
              </button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Cart;
