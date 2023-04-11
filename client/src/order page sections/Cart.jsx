import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";
const Cart = () => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_content}>
        <div className={styles.top_section}>
          <div className={styles.top_section_left}>
            <h1>YOUR ORDER</h1>
            <p>2 items</p>
          </div>
          <div className={styles.top_section_right}>
            <IoMdClose size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
