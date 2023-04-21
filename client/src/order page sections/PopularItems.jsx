import styles from "./PopularItems.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../CartContext";
const PopularItems = () => {
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });

  const { addToCart } = useContext(CartContext);

  const menuItems = menuData?.slice(0, 6);

  return (
    <div className={styles.section_container}>
      <h2 className={styles.heading}>Popular Items</h2>
      <div className={styles.items_grid}>
        {menuItems?.map((item, index) => {
          return (
            <div className={styles.item_container} key={index}>
              <img className={styles.item_image} src={item.image} alt=""></img>
              <div className={styles.item_content}>
                <h4>{item.name}</h4>
                <div className={styles.item_sub_container}>
                  <p>Rs. {item.price}</p>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className={styles.add_button}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PopularItems;
