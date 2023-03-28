import styles from "./Menu.module.css";
import menuData from "../menuItem.json";
import { useState, useEffect, useRef } from "react";
import MenuByCategory from "./MenuByCategory";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState(new Set());

  useEffect(() => {
    setMenu(menuData);
  }, []);

  useEffect(() => {
    const categorySet = new Set();
    menu.forEach((item) => {
      categorySet.add(item.category);
    });
    setCategories(categorySet);
  }, [menu]);

  const refs = {
    "North Indian": useRef(null),
    Chinese: useRef(null),
    Italian: useRef(null),
    "South Indian": useRef(null),
    Desserts: useRef(null),
  };

  const headerHeight = 70;

  const scrollToSection = (ref) => {
    const top = ref.current.offsetTop - headerHeight;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <select
        className={styles.menu_categories}
        name="menu_categories"
        onChange={(e) => {
          scrollToSection(refs[e.target.value]);
        }}
      >
        <option value="">Select a menu</option>
        {[...categories].map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      {[...categories].map((category) => {
        return (
          <div
            className={styles.menu_container}
            key={category}
            ref={refs[category]}
          >
            <MenuByCategory category={category} />
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
