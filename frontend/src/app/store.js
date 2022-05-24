import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice.js'
import cartReducer from '../features/cart/cartSlice.js'
import userReducer from '../features/user/userSlice.js'
import orderReducer from '../features/order/orderSlice.js'

// const middleware = []

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    // middleware
  },
})
