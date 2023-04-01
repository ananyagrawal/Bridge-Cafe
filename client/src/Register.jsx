import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Register = (props) => {
  return (
    <div className={styles.register_popup}>
      <div className={styles.popup_content}>
        <div className={styles.top_section}>
          <div className={styles.register_heading}>
            <h4>Create account</h4>
            <p className={styles.link}>
              or{" "}
              <Link onClick={props.switchToLogin}>login to your account</Link>
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
          <input className={styles.input_box} placeholder="Name" type="text" />
          <input
            className={styles.input_box}
            placeholder="Phone Number or Email"
            type="text"
          />
          <input
            className={styles.input_box}
            placeholder="Create Password"
            type="text"
          />
          <p>
            By creating an account, you agree to our Terms and Conditions and
            Privacy Statement
          </p>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
