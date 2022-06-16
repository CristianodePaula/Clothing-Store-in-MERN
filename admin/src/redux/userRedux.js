import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
    },
      

    deleteUserStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload),
        1
      )
    },
    deleteUserFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    updateUserStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    updateUserSuccess: (state, action) => { 
      state.isFetching = false
      state.users[
        state.users.findIndex((user) => user._id === action.payload.id) 
      ] = action.payload.users
    },
    updateUserFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
  },
})

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure 
} = userSlice.actions
export default userSlice.reducer
