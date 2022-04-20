import { createSlice } from '@reduxjs/toolkit'
import { getProductById, getProducts } from './productsThunk'

const initialState = {
  products: [],
  product: [],
  loading: false,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    // Get products
    [getProducts.pending]: (state) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.products = payload
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.error = payload
    },
    // Get product by ID
    [getProductById.pending]: (state) => {
      state.loading = true
    },
    [getProductById.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.product = payload
    },
    [getProductById.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export default productsSlice.reducer
