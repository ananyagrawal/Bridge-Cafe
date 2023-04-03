import styles from "./OrderHeader.module.css";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import Login from "./Login";
import Register from "./Register";
import Cart from "./order page sections/Cart";
import { useCookies } from "react-cookie";
import axios from "axios";
const OrderHeader = () => {
  const [itemNumber, setItemNumber] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [userData, setUserData] = useState([]);
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

  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
  };

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const userID = window.localStorage.userID;
      try {
        const response = await axios.post("/auth/user/current-user", {
          userID,
        });
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

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
          {!cookies.access_token ? (
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
              {userData ? <p>{userData.name}</p> : ""}
              <button onClick={logout}>Logout</button>
            </div>
          )}
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
