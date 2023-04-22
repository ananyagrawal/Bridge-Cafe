import styles from "./OrderHeader.module.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { useEffect, useState, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Login from "./Login";
import Register from "./Register";
import Cart from "./order page sections/Cart";
// import axios from "axios";
import { CartContext } from "./CartContext";
import AuthContext from "./AuthContext.jsx";

const OrderHeader = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const [userInfo, setUserInfo] = useState(null);
  const value = useContext(AuthContext);
  const { cartItems, clearCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    value.login();
  }, [value]);
  // useEffect(async () => {
  //   try {
  //     const user = await axios.get("/auth/user/user-data");
  //     setUserInfo(user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [userInfo]);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const quantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      setQuantity(quantity);
      console.log(quantity); // or do something with the quantity
    } else {
      console.log("cartItems is not an array");
    }
  }, [cartItems]);

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

  // const logout = async () => {
  //   try {
  //     const response = await axios.post("/auth/user/logout");
  //     alert(response.data.message);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
          {!value.userInfo?.name ? (
            <div
              onClick={() => {
                switchToLogin();
              }}
              aria-hidden="true"
              className={styles.login_link}
            >
              LOGIN/REGISTER
            </div>
          ) : (
            <div>
              {value.userInfo ? <p>{value.userInfo?.name}</p> : ""}
              <button
                onClick={() => {
                  // logout();
                  value.logout();
                  clearCart();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div className={styles.cart_container}>
          <button
            className={styles.cart_button}
            onClick={() => {
              handleCartClick();
            }}
          >
            <BsFillCartFill />
            {/* {cartItems.reduce((total, item) => {
              return total + item.quantity;
            }, 0)} */}
            {quantity}
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
