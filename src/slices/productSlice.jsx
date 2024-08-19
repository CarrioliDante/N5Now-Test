import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productData from '../data/products.json'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productData.products)
      }, 500)
    })
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    purchaseItems: (state, action) => {
      const purchasedItems = action.payload
      purchasedItems.forEach((purchasedItem) => {
        const product = state.items.find(
          (item) => item.id === purchasedItem.id
        )
        if (product) {
          product.amount -= purchasedItem.quantity
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addProduct, purchaseItems } = productSlice.actions
export default productSlice.reducer
