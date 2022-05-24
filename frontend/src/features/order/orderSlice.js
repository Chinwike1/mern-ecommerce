import { createSlice } from '@reduxjs/toolkit'
import { createOrder } from './orderThunk'

const initialState = {
  loading: false,
  success: false,
  error: null,
  order: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.loading = true
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.order = payload
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

// export const { } = orderSlice.actions

export default orderSlice.reducer
