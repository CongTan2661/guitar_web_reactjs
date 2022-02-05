import callApi from "../../utils/callApi";
import {
  GET_INFO,
  USER_LOGIN,
  USER_SIGNUP,
  VERIFY_ADMIN,
} from "../constants/user.constant";

export const userLoginAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await callApi("api/v2/login/sign-in", "POST", data);
      dispatch({
        type: USER_LOGIN,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const userSignUpAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await callApi("api/v2/login/sign-up", "POST", data);

      dispatch({
        type: USER_SIGNUP,
        payload: res.data,
      });
    } catch (err) {}
  };
};
export const getInfoAction = (token) => {
  return async (dispatch) => {
    // const token = document.cookie.split("=")[1];
    try {
      let res = await callApi("api/v2/login/getInfo", "GET", "", {
        token: token,
      });
      // console.log(res.data);
      dispatch({
        type: GET_INFO,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const verifyAdmin = (token) => {
  return async (dispatch) => {
    try {
      let res = await callApi("api/v2/login/verify", "GET", "", {
        token: token,
      });
      dispatch({
        type: VERIFY_ADMIN,
        payload: res.data,
      });
    } catch (error) {}
  };
};
