import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from "../resources/requestMethods"
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux"
import {
  addUserStart,
  addUserSuccess,
  addUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from './userRedux'
import { 
  addCategorieStart,
  addCategorieSuccess,
  addCategorieFailure,
  getCategorieStart,
  getCategorieSuccess,
  getCategorieFailure,
  deleteCategorieStart,
  deleteCategorieSuccess,
  deleteCategorieFailure,
} from './categorieRedux'
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} from './orderRedux'
import {
  getMessageFailure,
  getMessageStart,
  getMessageSuccess,
  deleteMessageStart,
  deleteMessageSuccess,
  deleteMessageFailure
} from './messageRedux'

//LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

// USERS
export const addUser = async (user, dispatch) => {
  dispatch(addUserStart())
  try {
    const res = await publicRequest.post("/auth/register", user)
    dispatch(addUserSuccess(res.data))
  } catch (err) {
    dispatch(addUserFailure())
  }
}

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
    const res = await userRequest.delete(`/users/${id}`)
    dispatch(deleteUserSuccess(res.data))
  } catch (err) {
    dispatch(deleteUserFailure())
  }
}

// PRODUCTS
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try {
    const res = await userRequest.post(`/products`, product)
    dispatch(addProductSuccess(res.data))
  } catch (err) {
    dispatch(addProductFailure())
  }
}

export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const res = await userRequest.get("/products")
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try { 
    const res = await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(res.data))
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {
    const res = await userRequest.put(`/products/${id}`, product)
    dispatch(updateProductSuccess(res.data))
  } catch (err) {
    dispatch(updateProductFailure())
  }
}

// CATEGORIES
export const addCategorie = async (categorie, dispatch) => {
  dispatch(addCategorieStart())
  try {
    const res = await userRequest.post(`/categories`, categorie)
    dispatch(addCategorieSuccess(res.data))
  } catch (err) {
    dispatch(addCategorieFailure())
  }
}

export const getCategories = async (dispatch) => {
  dispatch(getCategorieStart())
  try {
    const res = await userRequest.get("/categories")
    dispatch(getCategorieSuccess(res.data))
  } catch (err) {
    dispatch(getCategorieFailure())
  }
}

export const deleteCategorie = async (id, dispatch) => {
  dispatch(deleteCategorieStart())
  try { 
    const res = await userRequest.delete(`/categories/${id}`)
    dispatch(deleteCategorieSuccess(res.data))
  } catch (err) {
    dispatch(deleteCategorieFailure())
  }
}

// ORDERS
export const getOrders = async (dispatch) => {
  dispatch(getOrderStart())
  try {
    const res = await userRequest.get("/orders")
    dispatch(getOrderSuccess(res.data))
  } catch (err) {
    dispatch(getOrderFailure())
  }
}

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart())
  try { 
    const res = await userRequest.delete(`/orders/${id}`)
    dispatch(deleteOrderSuccess(res.data))
  } catch (err) {
    dispatch(deleteOrderFailure())
  }
}


// MESSAGES
export const getMessages = async (dispatch) => {
  dispatch(getMessageStart())
  try {
    const res = await userRequest.get("/contacts")
    dispatch(getMessageSuccess(res.data))
  } catch (err) {
    dispatch(getMessageFailure())
  }
}

export const deleteMessage = async (id, dispatch) => {
  dispatch(deleteMessageStart())
  try { 
    const res = await userRequest.delete(`/contacts/${id}`)
    dispatch(deleteMessageSuccess(res.data))
  } catch (err) {
    dispatch(deleteMessageFailure())
  }
}
