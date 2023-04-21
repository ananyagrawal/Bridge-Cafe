import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import { useCookies } from "react-cookie";
import axios from "axios";
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  // updateCartItem: () => {}
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const { isAuth, userInfo } = useContext(AuthContext);

  const [cookies, setCookie] = useCookies(["cart"]);

  useEffect(() => {
    async function loadCartData() {
      // await login();
      try {
        console.log("loadCartData");
        const data = await getCartData();
        setCartItems(data);
      } catch (err) {
        console.error("Failed to load cart data", err);
      }
    }

    loadCartData();
  }, []);

  useEffect(() => {
    // Do something with the updated isAuth value
    console.log(`isAuth value updated to: ${isAuth}`);
  }, [isAuth]);

  useEffect(() => {
    async function updateCartData(cartData) {
      // await login();
      console.log(isAuth);
      if (isAuth) {
        // Update cart data on the server
        console.log("auth yes updateCart");
        try {
          await axios.post("auth/user/add-cart", {
            cart: cartData,
          });
        } catch (err) {
          console.error("Failed to update cart data on server", err);
        }
      } else {
        // Write cart data to cookie
        console.log("auth no write cart to cookie");
        setCookie("cart", cartData, { path: "/" });
      }
    }
    updateCartData(cartItems);
  }, [cartItems, isAuth, setCookie]);

  function addToCart(item) {
    console.log("add");
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.itemId === item._id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        const newItem = {
          itemId: item._id,
          quantity: 1,
        };
        return [...prevItems, newItem];
      }
    });
  }

  function removeFromCart(itemId) {
    console.log("remove");
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.itemId === itemId
    );
    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      if (updatedItems[existingItemIndex].quantity > 1) {
        updatedItems[existingItemIndex].quantity -= 1;
      } else {
        updatedItems.splice(existingItemIndex, 1);
      }
      setCartItems(updatedItems);
    }
  }

  // async function getCartData() {
  //   const userId = userInfo?._id;
  //   if (isAuth) {
  //     console.log("auth yes getCartData");
  //     try {
  //       const response = await axios.get("/auth/user/get-cart", { userId });
  //       return response;
  //     } catch (err) {
  //       console.error("Failed to load cart data from server", err);
  //     }
  //   } else {
  //     console.log("auth no getCartData");
  //     return cookies.cart;
  //   }
  //   return [];
  // }

  async function getCartData() {
    const userId = userInfo?._id;
    try {
      // Wait for login to complete before making the get-cart request
      // await login();
      console.log(isAuth);
      if (isAuth) {
        console.log("auth yes getcartdata");
        const response = await axios.get("/auth/user/get-cart", { userId });
        return response;
      } else {
        console.log("auth no getcartdata");
        return cookies.cart;
      }
    } catch (err) {
      console.error("Failed to load cart data from server", err);
      return [];
    }
  }

  function clearCart() {
    console.log("clearcart");
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
