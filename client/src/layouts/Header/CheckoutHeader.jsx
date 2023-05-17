import styles from "./CheckoutHeader.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

const CheckoutHeader = () => {
  return (
    <div className={styles.header_container}>
      <Link to="/">
        <img className={styles.cafe_logo} src={logo} alt="Divine Bridge Cafe" />
      </Link>
      <div className={styles.profile_container}>
        <div className={styles.person}>
          <BsFillPersonFill size={24} />
        </div>
        <div>Anany Agrawal</div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
