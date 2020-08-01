const InitialState = {
  currentUser: null
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
