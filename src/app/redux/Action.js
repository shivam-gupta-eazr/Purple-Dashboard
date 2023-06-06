import axios from "axios";
const url = "https://dummyjson.com/users";

// export const fetchData = () => {
//   return (dispatch) => {
//     dispatch({ type: "START" });
//     return axios
//       .get(url)
//       .then((res) => dispatch({ type: "FETCH", payload: res.data }));
//   };
// };

export const fetchData = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING",
    });

    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: "FETCH",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const incrementData = () => {
  return (dispatch) => {
    return dispatch({ type: "INC" });
  };
};
export const decrementData = () => {
  return (dispatch) => {
    return dispatch({ type: "DEC" });
  };
};
