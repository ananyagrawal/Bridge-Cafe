import { useState, useContext } from "react";
import styles from "./MenuByCategory.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "../CartContext";

const MenuByCategory = ({ category }) => {
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });

  const [itemAdded, setItemAdded] = useState(false);

  const { addToCart } = useContext(CartContext);

  const menuItems = menuData?.filter((item) => item.category === category);

  function callAddMessage() {
    setItemAdded(true);
    setTimeout(() => setItemAdded(false), 3000);
  }

  return (
    <div>
      <h2 className={styles.menu_category_heading}>{category}</h2>
      <div className={styles.item_grid}>
        {menuItems.map((item, index) => {
          return (
            <>
              <div className={styles.item_card} id={index}>
                <img className={styles.item_image} src={item.image} alt="" />
                <div className={styles.item_content}>
                  <h5 className={styles.item_name}>{item.name}</h5>
                  <p className={styles.item_desc}>{item.description}</p>
                  <div className={styles.item_sub_container}>
                    <p className={styles.item_price}>Rs. {item.price}</p>
                    <button
                      onClick={() => {
                        addToCart(item);
                        callAddMessage();
                      }}
                      className={styles.add_button}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {itemAdded && (
                <div className={styles.alert_message}>
                  Item added successfully
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default MenuByCategory;
