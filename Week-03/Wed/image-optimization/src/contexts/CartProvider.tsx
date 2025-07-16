'use client';
import { CartContextType, CartItemType, ProductType } from '@/types';
import { createContext, useState } from 'react';

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const cartValue = {
    cart,
    addToCart: (product: ProductType) => {
      const addedItem = {
        item: product,
        quantity: 1,
      };
      setCart((prev) => {
        const existedItem = prev.find(
          (cartItem) => cartItem.item.id === addedItem.item.id
        );
        // Increase quantity if item exists
        if (existedItem) {
          const updateCart = prev.map((cartItem) => {
            if (cartItem.item.id === addedItem.item.id) {
              cartItem.quantity += addedItem.quantity;
            }
            return cartItem;
          });
          return updateCart;
        }
        // Add new item if not found
        return [...prev, addedItem];
      });
    },
  };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
