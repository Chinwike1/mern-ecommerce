import { createSlice } from '@reduxjs/toolkit'
import { userLogout, userLogin, registerUser } from './userThunk'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userToken,
  userInfo: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // user login
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = ''
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.token
      state.error = ''
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // user logout
    [userLogout.fulfilled]: (state) => {
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = ''
    },
    // register user
    [registerUser.pending]: (state, { payload }) => {
      state.loading = true
      state.error = ''
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.token
      state.error = ''
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

// export const {  } = userSlice.actions

export default userSlice.reducer
