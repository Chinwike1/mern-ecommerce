import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice.js'

// const middleware = []

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // middleware
  },
})
