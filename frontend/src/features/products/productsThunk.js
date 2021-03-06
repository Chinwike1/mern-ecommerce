import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    try {
      const { data } = await axios.get('/api/products/')
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message
      } else {
        return error.message
      }
    }
  }
)

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message
      } else {
        return error.message
      }
    }
  }
)
