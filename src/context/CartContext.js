import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let acc = 0;
    cart.forEach((element) => {
      acc += Number(element.price) * Number(element.quantity);
    });
    setTotal(acc);
  }, [cart]);

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

  const clearCart = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  const getTotal = () => {
    let acc = 0;
    cart.forEach((element) => {
      acc += Number(element.price) * Number(element.quantity);
    });
    return `${acc.toLocaleString("es-CL")}`;
  };

  const getQuantity = () => {
    let acc = 0;
    cart.forEach((element) => {
      acc += element.quantity;
    });
    return acc;
  };
  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        getQuantity,
        getProductQuantity,
        removeItem,
        getTotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
