import React, { useState } from 'react';
import { IProduct } from 'src/utils/types';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartContext {
  cartItems: ICartItem[];
  addItem: (cartItem: ICartItem) => void;
  removeItem: (cartItem: ICartItem) => void;
  clearCart: () => void;
}

interface ICartProviderProps {
    children: React.ReactNode;
}

const CartContext = React.createContext<ICartContext>({
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addItem = (newItem: ICartItem) => {
    setCartItems([...cartItems, newItem]);
  };

  const removeItem = (cartItem: ICartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

