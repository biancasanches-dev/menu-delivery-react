import React, { useState, createContext, useContext, useEffect } from 'react';
import { IProduct } from 'src/utils/types';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartContext {
  cartItems: ICartItem[];
  addItem: (cartItem: ICartItem) => void;
  removeItem: (cartItem: ICartItem) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCart = (): ICartContext => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
	const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
		const savedCart = localStorage.getItem('cart');
		return savedCart ? JSON.parse(savedCart) : [];
	});
    
	const [ isCartOpen, setCartOpen ] = useState(false);

	const openCart = () => setCartOpen(true);
	const closeCart = () => setCartOpen(false);


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);


	const addItem = (newItem: ICartItem) => {
		const existingItem = cartItems.find(item => item.id === newItem.id);
		if (existingItem) {
			setCartItems(cartItems.map(item =>
				item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
			));
		} else {
			setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
		}
	};

	const removeItem = (cartItem: ICartItem) => {
		const existingItem = cartItems.find(item => item.id === cartItem.id);
		if (existingItem) {
			if (existingItem.quantity > 1) {
				setCartItems(cartItems.map(item =>
					item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
				));
			} else {
				setCartItems(cartItems.filter(item => item.id !== cartItem.id));
			}
		}
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addItem, removeItem, clearCart, openCart, closeCart, isCartOpen  }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

