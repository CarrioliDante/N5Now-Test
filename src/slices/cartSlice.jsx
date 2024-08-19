import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity,
        })
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart(state, action) {
      const updatedCart = state.filter(
        (product) => product.id !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      return updatedCart
    },
    updateQuantity(state, action) {
      const { id, increment } = action.payload
      const existingProduct = state.find(
        (product) => product.id === id
      )
      if (existingProduct) {
        if (increment) {
          existingProduct.quantity += 1
        } else if (!increment && existingProduct.quantity > 1) {
          existingProduct.quantity -= 1
        }
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    clearCart() {
      localStorage.removeItem('cart')
      return []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
