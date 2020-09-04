import SHOP_DATA from "./shop.data";
import { UPDATE_COLLECTIONS } from "./types";

const INITIAL_STATE = {
  collections: {}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
