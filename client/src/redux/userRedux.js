// redux responsável pelo usuário
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,  // usuário atual nulo
    isFetching: false, // está buscando ? não
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    loginEnd: (state) => { // criado para testes de logout
      state.isFetching = false
      state.error = false
      state.currentUser = null
    },
  },
})

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  loginEnd // criado para testes de logout 
} = userSlice.actions

export default userSlice.reducer
