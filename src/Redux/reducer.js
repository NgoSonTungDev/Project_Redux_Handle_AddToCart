const initstate = {
  dataCart: [],
};

const rootReducer = (state = initstate, action) => {
  switch (action.type) {
    case "dataCart/addCart":
      return {
        ...state,
        dataCart: [...state.dataCart, action.payload],
      };
     
    case "dataCart/ClearnCart":
      return {
        ...state,
        dataCart: [],
      };

    case "dataCart/RemovenCart":
      return {
        ...state,
        dataCart: [...state.dataCart],
      };

    default:
      return state;
  }
};

export default rootReducer;
