import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
const Login = (props) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const value = useContext(AuthContext);

  const handleEmailOrPhoneBlur = () => {
    if (emailOrPhone && !isValidEmailOrPhone(emailOrPhone)) {
      setEmailOrPhoneError("Invalid email or phone");
    }
  };

  const isValidEmailOrPhone = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handlePasswordBlur = () => {
    if (password && password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    }
  };

  const handleChange = () => {
    if (emailOrPhone) {
      setEmailOrPhoneError("");
    }
    if (password) {
      setPasswordError("");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!emailOrPhone) {
      setEmailOrPhoneError("Field is required");
    }
    if (!password) {
      setPasswordError("Field is required");
    }
    if (!emailOrPhoneError && !passwordError) {
      sendUserData();
    }
  };

  const sendUserData = async () => {
    try {
      const response = await axios.post("/auth/user/login", {
        emailOrPhone,
        password,
      });
      await value.login();
      alert(response.data.message);
      props.onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.form_popup}>
      <div className={styles.popup_content}>
        <div className={styles.top_section}>
          <div className={styles.login_heading}>
            <h4>Login</h4>
            <p className={styles.link}>
              or <Link onClick={props.switchToRegister}>create an account</Link>
            </p>
          </div>
          <IoMdClose
            className={styles.close_button}
            size="24"
            onClick={props.onClose}
          />
        </div>
        <hr className={styles.break_line} />
        <form onSubmit={onSubmit} className={styles.second_section}>
          <div className={styles.form_group}>
            <input
              className={styles.input_box}
              placeholder="Phone Number or Email"
              type="text"
              value={emailOrPhone}
              onChange={(e) => {
                setEmailOrPhone(e.target.value);
                handleChange();
              }}
              onBlur={handleEmailOrPhoneBlur}
            />
            {emailOrPhoneError && (
              <p className={styles.error_msg}>{emailOrPhoneError}</p>
            )}
          </div>
          <div className={styles.form_group}>
            <input
              className={styles.input_box}
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleChange();
              }}
              onBlur={handlePasswordBlur}
            />
            {passwordError && (
              <p className={styles.error_msg}>{passwordError}</p>
            )}
          </div>
          <p className={styles.condition_msg}>
            By clicking on login, you agree to our Terms and Conditions and
            Privacy Statement
          </p>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
