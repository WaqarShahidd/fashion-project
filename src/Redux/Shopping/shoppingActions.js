import * as actionTypes from "./shoppingTypes";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const adjustQty = (product) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: product,
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
