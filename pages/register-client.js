import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(null);

  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const register = () => {
    // console.log(globalState.jwt);
    const data = {
      username: registerUsername,
    };
    let json = JSON.stringify(data);

    fetch("https://fitt-af-auth-api.herokuapp.com/api/register-client", {
      // fetch("http://localhost:4000/api/register-client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${globalState.jwt}`,
      },
      body: json,
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log("Response from api login: ", res);
        if (res.user) {
          setUserCreated(true);
        }
        if (res.error) {
          setError(res.error);
        }
      });
  };

  return (
    <div className="signupBg">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
        {globalState.userID == "6153485de4808000161a2511" && (
          <div>
            <h1>{!userCreated ? `Register a new client` : "Client added"}</h1>
            {!userCreated && (
              <p>
                Enter the email address of a new client below. They will receive
                an email that allows them to set their password and then login
                to their account.
              </p>
            )}
            {userCreated && (
              <p>
                An email invite and one time password has been sent to the email
                address {registerUsername}. Next, the customer will need to
                verify their account and set up a password, which they can do by
                clicking on the email.
              </p>
            )}
            {!userCreated && (
              <>
                {" "}
                <input
                  placeholder="email"
                  onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <button className="btn grow light formBtn" onClick={register}>
                  Submit
                </button>
              </>
            )}
            {error && (
              <div className="mt-3">
                <Alert severity="error">{error}</Alert>
              </div>
            )}
          </div>
        )}
        {globalState.userID !== "6153485de4808000161a2511" && (
          <div>
            <h1>Access denied</h1>
            <p>Sorry, you do not have access to add a new user.</p>
          </div>
        )}
      </div>
    </div>
  );
}
