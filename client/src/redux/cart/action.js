import axios from "axios";

import {
  CART_FAILURE,
  CART_REQUEST,
  GET_CART_SUCCESS,
  GET_PAYMENT_SUCCESS,
} from "./actionTypes";
// https://anxious-bull-glasses.cyclic.app/users/cart/
export const getcart = (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios({
    method: "get",
    url: "https://etutorhub-server.onrender.com/users/cart",
    headers: {
      "Authorization":localStorage.getItem('frontendtoken')
    },
  })
    .then((res) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};
