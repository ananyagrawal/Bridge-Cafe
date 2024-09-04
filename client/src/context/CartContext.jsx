import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext.jsx";
import { useCookies } from "react-cookie";
import axios from "axios";
export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const { isAuth, userInfo } = useContext(AuthContext);

  const [cookies, setCookie] = useCookies(["cart"]);

  // useEffect(() => {
  //   async function loadCartData() {
  //     try {
  //       console.log("loadCartData on mount");
  //       const data = await getCartData();
  //       console.log("set cart items on load", data);
  //       setCartItems(data);
  //     } catch (err) {
  //       console.error("Failed to load cart data", err);
  //     }
  //   }
  //   loadCartData();
  // }, []);

  // useEffect(() => {
  //   const changeSomething = async () => {
  //     try {
  //       console.log("get cart data on auth change");
  //       let cartData = await getCartData();
  //       if (cookies.cart && cookies.cart.length > 0) {
  //         console.log("merging carts");
  //         cartData = mergeCarts(cartData, cookies.cart);
  //         setCookie("cart", [], { path: "/" });
  //       }
  //       console.log("set cart items on auth change", cartData);
  //       setCartItems(cartData);
  //       if (isAuth) {
  //         console.log("set cart in server");
  //         setCartInServer(cartData);
  //       }
  //     } catch (err) {
  //       console.error("Failed to load cart data", err);
  //     }
  //   };
  //   changeSomething();
  // }, [isAuth]);

  function mergeCarts(serverCart, cookieCart) {
    const mergedCart = [...serverCart];
    cookieCart.forEach((cookieItem) => {
      const existingItemIndex = mergedCart.findIndex(
        (cartItem) => cartItem.itemId === cookieItem.itemId
      );
      if (existingItemIndex >= 0) {
        mergedCart[existingItemIndex].quantity += cookieItem.quantity;
      } else {
        mergedCart.push(cookieItem);
      }
    });
    return mergedCart;
  }

  function addToCart(item) {
    console.log("add", item);
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      console.log(prevItems);
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.itemId === item.itemId
      );
      console.log(existingItemIndex);
      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        const newItem = {
          itemId: item._id,
          quantity: 1,
        };
        updatedItems.push(newItem);
      }
      console.log(updatedItems);
      if (isAuth) {
        setCartInServer(updatedItems);
      } else {
        setCookie("cart", updatedItems, { path: "/" });
      }
      return updatedItems;
    });
  }

  async function setCartInServer(cartData) {
    try {
      console.log("setCartInServer", cartData);
      await axios.post("/auth/user/add-cart", {
        cart: cartData,
      });
    } catch (err) {
      console.error("Failed to update cart data on server", err);
    }
  }

  function removeFromCart(itemId) {
    console.log("remove");
    // const existingItemIndex = cartItems.findIndex(
    //   (cartItem) => cartItem.itemId === itemId
    // );
    // if (existingItemIndex >= 0) {
    //   const updatedItems = [...cartItems];
    //   if (updatedItems[existingItemIndex].quantity > 1) {
    //     updatedItems[existingItemIndex].quantity -= 1;
    //   } else {
    //     updatedItems.splice(existingItemIndex, 1);
    //   }
    //   setCartItems(updatedItems);
    // }
    setCartItems((prevItems) => {
      let updatedItems = [...prevItems];
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.itemId === itemId
      );
      if (existingItemIndex >= 0) {
        if (updatedItems[existingItemIndex].quantity > 1) {
          updatedItems[existingItemIndex].quantity -= 1;
        } else {
          updatedItems.splice(existingItemIndex, 1);
        }
      }
      if (isAuth) {
        setCartInServer(updatedItems);
      } else {
        setCookie("cart", updatedItems, { path: "/" });
      }
      return updatedItems;
    });
  }

  // async function getCartData() {
  //   try {
  //     console.log("Fetching cart data when auth is", isAuth);
  //     if (isAuth) {
  //       return userInfo.cart || [];
  //     } else {
  //       return cookies.cart || [];
  //     }
  //   } catch (err) {
  //     console.error("Failed to load cart data from server", err);
  //     return [];
  //   }
  // }

  useEffect(() => {
    setCartItems(cookies.cart || []);
  }, []);

  useEffect(() => {
    //when auth changes from false to true
    if (isAuth) {
      console.log("merging carts");
      const cartData = mergeCarts(cartItems, userInfo.cart);
      setCookie("cart", [], { path: "/" });
      setCartItems(cartData);
      setCartInServer(cartData);
    }
    // else {
    //   setCartItems(cookies.cart);
    // }
  }, [isAuth]);

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
