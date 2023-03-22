import styles from "./OrderHeader.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
const OrderHeader = () => {
  const [itemNumber, setItemNumber] = useState(0);
  return (
    <div className={styles.header_container}>
      <Link to="/">
        <img className={styles.cafe_logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.right_section}>
        <div className={styles.profile_container}>
          <BsPersonCircle size={20} />
          <p>LOG IN</p>
        </div>
        <div className={styles.cart_container}>
          <button
            className={styles.cart_button}
            onClick={() => {
              setItemNumber(0);
            }}
          >
            <BsFillCartFill />
            {itemNumber}
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderHeader;
