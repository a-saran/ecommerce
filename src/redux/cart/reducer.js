import {} from "./types";

const INITIAL_STATE = {};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "":
      return;
    default:
      return state;
  }
};

export default cartReducer;
