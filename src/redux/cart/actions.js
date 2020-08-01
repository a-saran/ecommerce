import { ADD_ITEM } from "./types";

export const addItemToCart = item => ({
  type: ADD_ITEM,
  payload: item
});
