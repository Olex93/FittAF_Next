const initialState = {
  loggedIn: "false",
  customerName: "",
  verifiedUser: false,
  userID: "",
  jwt: null,
  goals: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedIn: action.loggedIn,
        jwt: action.jwt,
        userID: action.userID,
        goals: action.goals,
      };
    case "LOG_OUT":
      return {
        ...state,
        loggedIn: action.loggedIn,
        customerName: action.customerName,
        verifiedUser: action.verifiedUser,
        userID: action.userID,
        jwt: action.jwt,
      };
    case "SET_NAME":
      return {
        ...state,
        customerName: action.payload,
      };
    case "UPDATE_GOALS":
      return {
        ...state,
        goals: action.goals,
      };
    default:
      return state;
  }
}
