import React from "react";
import styles from "./Address.module.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function Address(props) {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_content}>
        <IoMdClose
          className={styles.close_button}
          size="20"
          onClick={props.onClose}
        />
        <div className={styles.delivery_content}>
          <h1>Enter your delivery address</h1>
          <p>This will help us confirm the delivery availability</p>
        </div>
        <input
          className={styles.search_place_input}
          type="search"
          placeholder="Address"
        ></input>
        <Link to="/" className={styles.link}>
          <p>Sign in for saved address</p>
        </Link>
        <button className={styles.continue_button}>Continue to store</button>
      </div>
    </div>
  );
}

export default Address;
