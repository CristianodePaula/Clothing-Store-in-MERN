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

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart())
  try {
 
    dispatch(deleteUserSuccess(id))
  } catch (err) {
    dispatch(deleteUserFailure())
  }
}

export const updatePUser = async (id, user, dispatch) => {
  dispatch(updateUserStart())
  try {

    dispatch(updateUserSuccess({ id, user }))
  } catch (err) {
    dispatch(updateUserFailure())
  }
}





export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get("/products")
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
 
    dispatch(deleteProductSuccess(id))
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {

    dispatch(updateProductSuccess({ id, product }))
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
