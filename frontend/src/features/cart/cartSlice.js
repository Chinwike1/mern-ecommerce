import { createSlice } from '@reduxjs/toolkit'

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cartItems,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const itemExists = state.cartItems.find(
        (x) => x.product === payload.product
      )
      if (itemExists) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === itemExists.product ? payload : x
        )
      } else {
        state.cartItems.push(payload)
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((x) => x.product !== payload)
    },
  },
  extraReducers: {},
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer
