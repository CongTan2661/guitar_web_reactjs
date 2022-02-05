import {
  GET_INFO,
  USER_LOGIN,
  USER_SIGNUP,
  VERIFY_ADMIN,
} from "../constants/user.constant";

const initialState = {
  isLogin: {},
  isSignup: {},
  info: {},
  verify: {},
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN: {
      state.isLogin = payload;
      return { ...state };
    }
    case USER_SIGNUP: {
      state.isSignup = payload;
      return { ...state };
    }
    case GET_INFO: {
      state.info = payload;
      return { ...state };
    }
    case VERIFY_ADMIN: {
      state.verify = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
