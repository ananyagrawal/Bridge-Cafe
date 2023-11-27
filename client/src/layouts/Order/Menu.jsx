import styles from "./Menu.module.css";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import MenuByCategory from "./MenuByCategory";
import axios from "axios";

const Menu = () => {
  const [categories, setCategories] = useState(new Set());

  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get(`${process.env.VITE_BASE_URL}/menu`);
    return response.data;
  });

  useEffect(() => {
    const categorySet = new Set();
    menuData?.forEach((item) => {
      categorySet.add(item.category);
    });
    setCategories(categorySet);
  }, [menuData]);

  const refs = {
    "Indian Dishes": useRef(null),
    Noodles: useRef(null),
    Momos: useRef(null),
    Breads: useRef(null),
    Dosas: useRef(null),
    Pizzas: useRef(null),
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
