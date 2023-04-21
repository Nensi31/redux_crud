const formReducers = (state: [], action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }

    case "DELETE": {
      return state.filter((item, index) => index !== action.payload);
    }

    case "UPDATE": {
      return (state || []).map((item, index) => {
        if (index === action.payload.editIndex) {
          return action.payload.record;
        } else return item;
      });
    }
    default: {
      return state || [];
    }
  }
};
export { formReducers };
