const initialState = {
  loading: false,
  data: [],
  count: 0,
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
      };
    case "START":
      return {
        loading: true,
      };
    case "INC":
      return {
        count: state.count + 1,
      };
    case "DEC":
      return {
        count: state.count - 1,
      };
    case "FETCH":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
