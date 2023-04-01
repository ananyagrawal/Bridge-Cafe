import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Login = (props) => {
  return (
    <div className={styles.login_popup}>
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
        <div className={styles.second_section}>
          <input
            className={styles.input_box}
            placeholder="Phone Number or Email"
            type="text"
          />
          <p>
            By clicking on login, you agree to our Terms and Conditions and
            Privacy Statement
          </p>
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
