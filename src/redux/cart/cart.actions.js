import cartReducerTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartReducerTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartReducerTypes.ADD_ITEM,
  payload: item,
});
