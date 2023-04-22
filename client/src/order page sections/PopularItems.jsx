import styles from "./PopularItems.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
// import { useCookies } from "react-cookie";
import { CartContext } from "../CartContext";
const PopularItems = () => {
  const { data: menuData } = useQuery(["menu"], async () => {
    const response = await axios.get("/api/menu");
    return response.data;
  });
  // const [cartItem, setCartItems] = useState([]);
  // const [cookies, setCookie] = useCookies(["cart"]);
  const { addToCart } = useContext(CartContext);
  // useEffect(() => {
  //   async function loadCartData() {
  //     try {
  //       const data = await getCartData();
  //       setCartItems(data);
  //     } catch (err) {
  //       console.error("Failed to load cart data", err);
  //     }
  //   }
  //   loadCartData();
  // }, []);

  // useEffect(() => {
  //   async function updateCartData(cartData) {
  //     try {
  //       const response = await axios.post("auth/user/add-cart", {
  //         cart: cartData,
  //       });
  //       if (response.status === 500) {
  //         setCookie("cart", cartData, { path: "/" });
  //       }
  //     } catch (err) {
  //       console.err("Failed to update cart data", err);
  //     }
  //   }
  //   updateCartData(cartItem);
  // }, [cartItem, setCookie]);

  // async function getCartData() {
  //   try {
  //     const response = await axios.get("/auth/user/get-cart");
  //     if (response.status === 500) {
  //       return cookies.cart;
  //     } else {
  //       return response;
  //     }
  //   } catch (err) {
  //     console.error("Failed to load cart data from server", err);
  //     return [];
  //   }
  // }

  const menuItems = menuData?.slice(0, 6);

  // const addToCart = async (item) => {
  //   setCartItems((prevItems) => {
  //     const existingItemIndex = prevItems.findIndex(
  //       (cartItem) => cartItem.itemId === item._id
  //     );
  //     if (existingItemIndex >= 0) {
  //       const updatedItems = [...prevItems];
  //       updatedItems[existingItemIndex].quantity += 1;
  //       return updatedItems;
  //     } else {
  //       const newItem = {
  //         itemId: item._id,
  //         quantity: 1,
  //       };
  //       return [...prevItems, newItem];
  //     }
  //   });
  // };

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
