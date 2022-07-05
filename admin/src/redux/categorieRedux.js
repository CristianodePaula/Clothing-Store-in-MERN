import { createSlice } from "@reduxjs/toolkit"

export const categorieSlice = createSlice({
  name: "categorie",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    
    addCategorieStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    addCategorieSuccess: (state, action) => {
      state.isFetching = false
      state.categories.push(action.payload)
    },
    addCategorieFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    
    getCategorieStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    getCategorieSuccess: (state, action) => {
      state.isFetching = false
      state.categories = action.payload
    },
    getCategorieFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
    
    deleteCategorieStart: (state) => {
      state.isFetching = true
      state.error = false
    },
    deleteCategorieSuccess: (state, action) => {
      state.isFetching = false
      state.categories.splice(
        state.categories.findIndex((categorie) => categorie._id === action.payload),
        1
      )
    },
    deleteCategorieFailure: (state) => {
      state.isFetching = false
      state.error = true
    },
  },
})

export const {
  addCategorieStart,
  addCategorieSuccess,
  addCategorieFailure,
  getCategorieStart,
  getCategorieSuccess,
  getCategorieFailure,
  deleteCategorieStart,
  deleteCategorieSuccess,
  deleteCategorieFailure,
} = categorieSlice.actions

export default categorieSlice.reducer
