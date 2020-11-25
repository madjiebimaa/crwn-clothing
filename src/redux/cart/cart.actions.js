import cartReducerTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartReducerTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartReducerTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartReducerTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartReducerTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
