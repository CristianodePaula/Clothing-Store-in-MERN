// redux responsável pela chamada api
import { loginFailure, loginStart, loginSuccess, loginEnd } from "./userRedux"
import { publicRequest } from "../resources/requestMethods"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const logout = async (dispatch) => {
  dispatch(loginEnd())
  try {
    const res = await publicRequest.post("/auth/login", null)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}