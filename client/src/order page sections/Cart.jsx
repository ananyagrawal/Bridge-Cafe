import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
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
          {cartItems.map((item) => (
            <div key={item.itemId}>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <button onClick={() => removeFromCart(item.itemId)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cart;
