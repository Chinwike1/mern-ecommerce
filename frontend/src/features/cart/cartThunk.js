import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addItemToCart, removeItemFromCart } from './cartSlice'

export const addItemToCartThunk = (item) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${item.id}`)
  const cartItem = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty: item.qty,
  }
  dispatch(addItemToCart(cartItem))

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCartThunk = (id) => (dispatch, getState) => {
  dispatch(removeItemFromCart(id))

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
