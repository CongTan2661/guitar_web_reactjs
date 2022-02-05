import { combineReducers } from "redux";
import { loadingReducer } from "./loading.reducers";
import { productReducer } from "./product.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  loading:loadingReducer
});
