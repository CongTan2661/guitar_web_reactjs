import {
  GET_PRODUCT_ITEM,
  GET_PRODUCT_LIST,
} from "../constants/product.constant";
import { ADD_PRODUCT } from "../constants/product.constant";
import { DELETE_PRODUCT } from "../constants/product.constant";
import { FIX_PRODUCT } from "../constants/product.constant";

const initialState = {
  productList: [],
  addProduct: {},
  fixProduct: null,
  productItem: {},
  deleteProduct: {},
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_LIST: {
      state.productList = payload;
      return { ...state };
    }
    case ADD_PRODUCT: {
      state.addProduct = payload;
      return { ...state };
    }
    case DELETE_PRODUCT: {
      state.deleteProduct = payload;
      return { ...state };
    }
    case FIX_PRODUCT: {
      state.fixProduct = payload;
      return { ...state };
    }
    case GET_PRODUCT_ITEM: {
      state.productItem = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
