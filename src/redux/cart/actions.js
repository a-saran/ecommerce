import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "./types";

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item
});
