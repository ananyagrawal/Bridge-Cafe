import styles from "./Right.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import { useContext, useEffect } from "react";
const Right = () => {

  const { cartItems  } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className={styles.right_container}>
      <h1>Summary</h1>
      <div className={styles.item_summary_container}>
        <div>
          { cartItems.map((item) => {
            return (
              <div key={item.itemId}>
                <p>{item.quantity} x</p>
                <p>{item.name}</p>
              </div>
            );
          }
        )}
        </div>
      </div>
    </div>
  );
};
export default Right;
