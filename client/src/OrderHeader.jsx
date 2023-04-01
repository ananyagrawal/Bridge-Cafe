import styles from "./OrderHeader.module.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Login from "./Login";
import Register from "./Register";
import Cart from "./order page sections/Cart";
const OrderHeader = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleClosePopup = () => {
    setShowLogin(false);
    setShowRegister(false);
  };
  const switchToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  return (
    <div className={styles.header_container}>
      <Link to="/">
        <img className={styles.cafe_logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.right_section}>
        <div className={styles.profile_container}>
          <div className={styles.person}>
            <BsFillPersonFill size={24} />
          </div>
          <div
            onClick={() => {
              switchToLogin();
            }}
            aria-hidden="true"
            className={styles.login_link}
          >
            LOGIN/REGISTER
          </div>
        </div>
        <div className={styles.cart_container}>
          <button
            className={styles.cart_button}
            onClick={() => {
              setItemNumber(0);
              handleCartClick();
            }}
          >
            <BsFillCartFill />
            {itemNumber}
          </button>
        </div>
      </div>
      {showLogin && (
        <Login switchToRegister={switchToRegister} onClose={handleClosePopup} />
      )}
      {showRegister && (
        <Register switchToLogin={switchToLogin} onClose={handleClosePopup} />
      )}
      {showCart && <Cart />}
    </div>
  );
};
export default OrderHeader;
