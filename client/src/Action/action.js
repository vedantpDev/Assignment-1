import axios from "axios";

export const getDataAction = () => (dispatch) => {
  dispatch({ type: "GET_DATA" });
  axios
    .get("/get", {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
    .then((res) => {
      dispatch({
        type: "GET_DATA_SUCCESS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log("Error ", err);
      dispatch({
        type: "GET_DATA_ERROR",
        payload: err,
      });
    });
};

export const searchAction = (searchData) => (dispatch) => {
  dispatch({ type: "SEARCH_DATA" });
  axios
    .post("/search", searchData)
    .then((res) => {
      dispatch({
        type: "SEARCH_DATA_SUCCESS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log("Error ", err);
      dispatch({
        type: "SEARCH_DATA_FAIL",
        payload: err,
      });
    });
};

export const loginAction = (formData) => (dispatch) => {
  axios
    .post("/login", formData)
    .then((res) => {
      localStorage.setItem("auth-token", res.data.token);
      dispatch({
        type: "GET_TOKEN",
        payload: { ...formData },
      });
    })
    .catch((err) => console.log("Error ", err));
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: "LOG_OUT",
  });
};
