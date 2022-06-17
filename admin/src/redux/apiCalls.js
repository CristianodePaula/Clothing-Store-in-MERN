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
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure
} from './userRedux'
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure
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
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
    const res = await userRequest.delete(`/users/${id}`)
    dispatch(deleteUserSuccess(res.data))
  } catch (err) {
    dispatch(deleteUserFailure())
  }
}

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart())
  try {

    dispatch(updateUserSuccess({ id, user }))
  } catch (err) {
    dispatch(updateUserFailure())
  }
}

// PRODUCTS
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
    const res = await userRequest.put(`/products`, product)
    dispatch(updateProductSuccess(res.data))
  } catch (err) {
    dispatch(updateProductFailure())
  }
}

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart())
  try {
    const res = await userRequest.post(`/products`, product)
    dispatch(addProductSuccess(res.data))
  } catch (err) {
    dispatch(addProductFailure())
  }
}


// Orders
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

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrderStart())
  try {
    const res = await userRequest.put(`/orders`, order)
    dispatch(updateOrderSuccess(res.data))
  } catch (err) {
    dispatch(updateOrderFailure())
  }
}


// MESSAGE
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
