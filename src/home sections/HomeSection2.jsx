import { Link } from "react-router-dom";
import styles from "./Section2.module.css";
const HomeSection2 = () => {
  return (
    <div className={styles.section_container}>
      <h1>&quot;There is no sincere love than food.&quot;</h1>
      <div className={styles.button_container}>
        <Link to="/order-online">
          x<button>Order Online</button>
        </Link>
        <Link to="/book-table">
          <button>Book Table</button>
        </Link>
      </div>
    </div>
  );
};
export default HomeSection2;
