import styles from "./Cart.module.css";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../../context/CartContext.jsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
const Cart = (props) => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });
  const [cartTotal, setCartTotal] = useState(0);
  const { showCart, setShowCart } = props;
  const show = showCart;
  const menuDataMap = new Map(menuData.map((item) => [item._id, item]));
  console.log(menuDataMap);
  useEffect(() => {
    // cartItems.reduce((total, item) => {
    //   setCartTotal((prev) => {
    //     const item = menuDataMap.get(item._id);
    //     return prev + item.price * item.quantity;
    //   }
    //   );
    // }, 0)
    let total = 0;
    // console.log('here', cartItems);
    cartItems.forEach((item) => {
      const menuItem = menuDataMap.get(item.itemId);
      // console.log(menuItem);
      total += menuItem?.price * item?.quantity;
    });
    setCartTotal(total);
  }, [cartItems]);
  return (
    <div
      className={styles.cart_container}
      style={{ display: show ? "flex" : "none" }}
    >
      <div className={`${styles.cart_content} ${show ? styles.slide_in : ""}`}>
        <div className={styles.top_section}>
          <div className={styles.top_section_left}>
            <h1>YOUR ORDER</h1>
            <p>
              {cartItems?.reduce((total, item) => {
                return total + item.quantity;
              }, 0)}{" "}
              items
            </p>
          </div>
          <div className={styles.top_section_right}>
            <IoMdClose
              size={20}
              onClick={() => {
                setShowCart(false);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.middle_section}>
          {cartItems.map((cartItem, index) => {
            const item = menuDataMap.get(cartItem.itemId);
            return (
              <div key={cartItem.itemId}>
                <div className={styles.item_container}>
                  <div className={styles.item_left}>
                    <h5>{item?.name}</h5>
                    <p>Customize</p>
                  </div>
                  <div className={styles.item_middle}>
                    <button onClick={() => removeFromCart(cartItem.itemId)}>
                      -
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button onClick={() => addToCart(cartItem)}>+</button>
                  </div>
                  <div className={styles.item_right}>
                    <p>₹ {item?.price}</p>
                  </div>
                </div>
                {index !== cartItems.length - 1 && (
                  <hr className={styles.break_line} />
                )}
              </div>
            );
          })}
          <div>
            {cartItems.length == 0 ?
              <div>
                <p>No Items to Display</p>
              </div> :

              <Link to="/checkout">
                <div className={styles.checkout_btn}>
                  <p>Checkout</p>
                  <p>₹ {cartTotal}</p>
                </div>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
