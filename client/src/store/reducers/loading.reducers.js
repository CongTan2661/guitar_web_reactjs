import { LOADING } from "../constants/product.constant";

const initialState = {
  loading: "",
};
export const loadingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      state = payload;
      return { ...state };

    default:
      return state;
  }
};
