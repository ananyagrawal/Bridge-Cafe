import styles from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_content}>
        <h1>Your Order</h1>
        <p>2 items</p>
      </div>
    </div>
  );
};
export default Cart;
