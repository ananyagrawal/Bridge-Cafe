import menu_data from "../menuItem.json";
import { useState, useEffect } from "react";
import styles from "./PopularItems.module.css";
const PopularItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu(menu_data);
  }, []);
  return (
    <div className={styles.section_container}>
      <h2 className={styles.heading}>Popular Items</h2>
      <div className={styles.items_grid}>
        {menu.map((item, index) => {
          return (
            <div className={styles.item_container} key={index}>
              <img className={styles.item_image} src={item.image} alt=""></img>
              <div className={styles.item_content}>
                <h4>{item.name}</h4>
                <div className={styles.item_sub_container}>
                  <p>Rs. {item.price}</p>
                  <button className={styles.add_button}>Add</button>
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
