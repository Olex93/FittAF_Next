const initialState = {
  loggedIn: "false",
  customerName: "",
  verifiedUser: false,
  userID: "",
  jwt:null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    case "LOG_OUT":
      return {
        ...state,
        loggedIn: "false",
        customerName: "",
      };
    case "SET_NAME":
      return {
        ...state,
        customerName: action.payload,
      };
    default:
      return state;
  }
};