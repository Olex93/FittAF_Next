import { LOG_IN, LOG_OUT, SET_NAME } from "./reducer";

export const logIn = (jwt, userID) => (dispatch) => {
  console.log(userID)
  return dispatch({
    type: "LOG_IN",
    loggedIn: "true",
    jwt:jwt, 
    userID: userID
  });
};

export const logOut = () => (dispatch) => {
  return dispatch({
    type: "LOG_OUT",
    loggedIn: "false",
    customerName: "",
    verifiedUser: false,
    userID: "",
    jwt:null,
  });
};
