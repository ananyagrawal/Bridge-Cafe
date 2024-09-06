import styles from "./Left.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const Left = () => {
  return (
    <div className={styles.left_container}>
      <div className={styles.backToStore}>
        <Link to="/order-online" style={{ textDecoration: "none", color: "black" }}>
          <IoIosArrowRoundBack size={36} color="#153A35" />
        </Link>
        <h1>Back to Store</h1>
      </div>
    </div>
  );
};
export default Left;
