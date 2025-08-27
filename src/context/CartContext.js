'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
})

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id))
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
