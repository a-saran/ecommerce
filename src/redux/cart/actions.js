import { ADD_ITEM, CLEAR_ITEM_FROM_CART } from "./types";

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});
