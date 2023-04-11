import styles from "./OrderHeader.module.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { useEffect, useState, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Login from "./Login";
import Register from "./Register";
import Cart from "./order page sections/Cart";
// import { useCookies } from "react-cookie";
// import axios from "axios";
import AuthContext from "./AuthContext.jsx";

// const authContext = useContext(AuthContext);

const OrderHeader = () => {
  const [itemCount, setItemCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const [userData, setUserData] = useState([]);
  const value = useContext(AuthContext);
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

  useEffect(() => {
    value.login();
  }, []);

  // const logout = async () => {
  //   try {
  //     const response = await axios.post("/auth/user/logout");
  //     console.log(userData);
  //     alert(response.data.message);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  // fetchData();
  // async function fetchData() {
  //   // const userID = window.localStorage.userID;
  //   try {
  //     const response = await axios.post("/auth/user/current-user");
  //     setUserData(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // auth();
  // setUserData(value.userInfo);
  // console.log(value);
  // }, [value]);

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
              <button onClick={value.logout}>Logout</button>
            </div>
          )}
        </div>
        <div className={styles.cart_container}>
          <button
            className={styles.cart_button}
            onClick={() => {
              setItemCount(0);
              handleCartClick();
            }}
          >
            <BsFillCartFill />
            {itemCount}
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
