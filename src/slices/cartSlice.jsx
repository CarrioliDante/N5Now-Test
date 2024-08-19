import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.find(
        (item) => item.id === action.payload.id
      )
      if (productInCart) {
        productInCart.quantity += action.payload.quantity
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity,
        })
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
    clearCart: () => {
      return []
    },
    updateQuantity: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload.id
      )
      if (product) {
        product.quantity = action.payload.quantity
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions

export default cartSlice.reducer
