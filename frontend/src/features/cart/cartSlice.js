import { createSlice } from '@reduxjs/toolkit'

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const shippingAddress = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : []

const paymentMethod = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null

const initialState = {
  cartItems,
  shippingAddress,
  paymentMethod,
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
    saveShippingAddress: (state, { payload }) => {
      localStorage.setItem('shippingAddress', JSON.stringify(payload))
    },
    savePaymentMethod: (state, { payload }) => {
      localStorage.setItem('paymentMethod', JSON.stringify(payload))
    },
  },
  extraReducers: {
    // [saveShippingAddress.fulfilled]: (state, { payload }) => {
    //   state.shippingAddress = payload
    // },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions

export default cartSlice.reducer
