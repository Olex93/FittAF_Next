import { LOG_IN, LOG_OUT, SET_NAME } from "./reducer";

export const logIn = (jwt, userID, goals) => (dispatch) => {
  // console.log(goals)
  return dispatch({
    type: "LOG_IN",
    loggedIn: "true",
    jwt:jwt, 
    userID: userID, 
    goals: goals
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
    goals: null,
  });
};


export const updateGoals = (goals) => (dispatch) => {
  return dispatch({
    type: "UPDATE_GOALS",
    goals: goals
  });
};