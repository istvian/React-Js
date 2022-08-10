import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
    }
  };
  const removeItem = (itemId) => {
    const cartWithoutItem = cart.filter((item) => item.id !== itemId);
    setCart(cartWithoutItem);
  };

  const clear = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  const getTotal = () => {
    let acc =0;
    cart.forEach(element => {
        acc+= Number(element.price) * Number(element.quantity);
    });
    return `${acc}.000`;
  };

  const getQuantity = () =>{
    let acc =0;
    cart.forEach(element => {
        acc+=element.quantity;
    });
    return acc;
  }
  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, getProductQuantity, removeItem, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
