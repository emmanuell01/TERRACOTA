import { useState } from 'react'
import { CartContext } from './cartContext.js'

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]) // [{ title, quantity, price }]

  const setItemQuantity = (title, quantity, price) => {
    setCart(prev => {
      if (quantity <= 0) {
        return prev.filter(item => item.title !== title)
      }
      const exists = prev.find(item => item.title === title)
      if (exists) {
        return prev.map(item =>
          item.title === title ? { ...item, quantity } : item
        )
      }
      return [...prev, { title, quantity, price }]
    })
  }

  const removeItem = (title) => {
    setCart(prev => prev.filter(item => item.title !== title))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <CartContext.Provider value={{ cart, setItemQuantity, removeItem, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
