import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order, { getState, rejectWithValue }) => {
    try {
      const {
        user: { userToken },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      }

      const { data } = await axios.post(`/api/orders`, order, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
