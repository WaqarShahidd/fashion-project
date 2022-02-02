import * as actionTypes from "./shoppingTypes";

const cart = [];

const shopReducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        return state.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
                total: (item.total = item.price * item.qty),
              }
            : item
        );
      } else {
        const product = action.payload;

        return [
          ...state,
          {
            ...product,
            qty: 1,
            total: (product.total = product.price),
            subtotal: product.subtotal,
          },
        ];
      }
    case actionTypes.REMOVE_FROM_CART:
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.qty) return state.filter((item) => item.id !== exist1.id);
      break;

    case actionTypes.ADJUST_QTY:
      const exist2 = state.find((item) => item.id === product.id);
      if (exist2.qty === 1) {
        return state.filter((item) => item.id !== exist2.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default shopReducer;
