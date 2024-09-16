import styles from "./Right.module.css";
import { CartContext } from "../../context/CartContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Right = () => {

  const { cartItems } = useContext(CartContext);
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });
  const menuDataMap = new Map(menuData.map((item) => [item._id, item]));
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log(cartItems);
    let total = 0;
    cartItems.forEach((item) => {
      const menuItem = menuDataMap.get(item.itemId);
      // console.log(menuItem);
      total += menuItem?.price * item?.quantity;
    });
    setCartTotal(total);
  }, [cartItems]);

  return (
    <div className={styles.right_container}>
      <div className={styles.right_subcontainer}>
        <h1>Summary</h1>
        <div className={styles.item_summary_container}>
          <div className={styles.item_label_container}>
            {cartItems.map((item) => {
              const menuItem = menuDataMap.get(item.itemId);
              return (
                <div key={menuItem.itemId} className={styles.item_label}>
                  <div>
                    <p>{menuItem.name} x {item.quantity}</p>
                  </div>
                  <p>₹ {menuItem.price}</p>
                </div>
              );
            }
            )}
          </div>
          <div className={styles.charges_container}>
            <div className={styles.charges_subcontainer}>
              <div className={styles.charges_label}>
                <p>Subtotal</p>
                <p>₹ {cartTotal}</p>
              </div>
              <div className={styles.charges_label}>
                <p>Delivery Fee</p>
                <p>₹ {'20'}</p>
              </div>
              <div className={styles.charges_label}>
                <p>Govt Taxes and Other Charges</p>
                <p>₹ {cartTotal * 0.08}</p>
              </div>
            </div>
          </div>
          <div className={styles.charges_label} style={{ fontWeight: 'bold', color: '#153A35', fontSize: '20px', padding: '12px' }}>
            <p >Total</p>
            <p>₹ {(cartTotal * 0.08) + cartTotal + 20}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Right;
