import {LOG_IN, LOG_OUT, SET_NAME} from './reducer'

export const logIn = () => (dispatch) => {
    return dispatch ({
      type: 'LOG_IN',
      loggedIn: "true"
    });
  };
  