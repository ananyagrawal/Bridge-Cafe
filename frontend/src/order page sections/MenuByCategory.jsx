import menuData from "../menuItem.json";
import styles from "./MenuByCategory.module.css";
const MenuByCategory = ({ category }) => {
  const menuItems = menuData.filter((item) => item.category === category);
  return (
    <div>
      <h2 className={styles.menu_category_heading}>{category}</h2>
      <div className={styles.item_grid}>
        {menuItems.map((item) => {
          return (
            <>
              <div className={styles.item_card}>
                <img className={styles.item_image} src={item.image} alt="" />
                <div className={styles.item_content}>
                  <h5 className={styles.item_name}>{item.name}</h5>
                  <p className={styles.item_desc}>{item.description}</p>
                  <div className={styles.item_sub_container}>
                    <p className={styles.item_price}>Rs. {item.price}</p>
                    <button className={styles.add_button}>Add</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default MenuByCategory;
