import {
  CART_FAILURE,
  CART_REQUEST,
  GET_CART_SUCCESS,
  GET_PAYMENT_SUCCESS,
} from "./actionTypes";

const initialState = {
  cart: [],
  payment: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payment: payload.payment,
      };
    default:
      return state;
  }
};
