import axios from "axios";
import callApi from "../../utils/callApi";
import {
  ADD_PRODUCT,
  DEL_LOADING,
  FIX_PRODUCT,
  GET_PRODUCT_ITEM,
  GET_PRODUCT_LIST,
  LOADING,
} from "../constants/product.constant";
import { DELETE_PRODUCT } from "../constants/product.constant";
//rut gon ham
const startLoading = (dispatch) => {
  return dispatch({
    type: LOADING,
    payload: { loading: true },
  });
};
const endLoading = (dispatch) => {
  return dispatch({
    type: LOADING,
    payload: { loading: false },
  });
};
export const getProductListAction = () => {
  return async (dispatch) => {
    startLoading(dispatch);
    try {
      const res = await callApi("api/v2/product", "GET");
      dispatch({
        type: GET_PRODUCT_LIST,
        payload: res.data,
      });
      endLoading(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProductListAction = (idProduct) => {
  return async (dispatch) => {
    startLoading(dispatch);
    const token = document.cookie.split("=")[1];
    try {
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:8082/api/v2/product/${idProduct}`,
        headers: {
          token: token,
        },
      });
      dispatch({
        type: DELETE_PRODUCT,
        payload: res.data,
        headers: {
          Authorization: `Bearer ${token}`,
          token: token,
        },
      });
      endLoading(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};
export const postProductListAction = (data) => {
  return async (dispatch) => {
    startLoading(dispatch);
    try {
      const res = await callApi(`api/v2/product/`, "POST", data);
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
      endLoading(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};
export const fixProduct = (idProduct, data) => {
  return async (dispatch) => {
    startLoading(dispatch);
    try {
      const res = await callApi(`api/v2/product/${idProduct}`, "PUT", data);
      console.log(data);
      dispatch({
        type: FIX_PRODUCT,
        payload: res.data,
      });
      endLoading(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductItemAction = (idProduct) => {
  return async (dispatch) => {
    startLoading(dispatch);
    try {
      const res = await callApi(`api/v2/product/${idProduct}`, "GET");
      // const data = res.data[0];
      console.log(res.data);
      dispatch({
        type: GET_PRODUCT_ITEM,
        payload: res.data,
      });
      endLoading(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
};
