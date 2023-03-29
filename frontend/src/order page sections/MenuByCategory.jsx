import { useState } from "react";
import menuData from "../menuItem.json";
import styles from "./MenuByCategory.module.css";
const MenuByCategory = ({ category }) => {
  const menuItems = menuData.filter((item) => item.category === category);

  const [itemAdded, setItemAdded] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  const handleAddButton = (index) => {
    setItemAdded(true);
    setTimeout(() => setItemAdded(false), 3000);
    setItemIndex(index);
    console.log(itemIndex);
    console.log(index);
    console.log(menuItems[itemIndex]);
  };

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
                        // setItemIndex(index);
                        handleAddButton(index);
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
