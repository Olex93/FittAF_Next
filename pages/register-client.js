import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/register-client",
    }).then((res) => {
      if (res.data == "User Created") {
        setUserCreated(true);
      }
    });
  };

  return (
    <div className="signupBg">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
        <div>
          <h1>{!userCreated ? `Register a new client` : "Client added"}</h1>
          {!userCreated && (
            <p>
              Enter the email address of a new client below. They will receive
              an email that allows them to set their password and then login to
              their account.
            </p>
          )}
          {userCreated && (
            <p>
              An email invite and one time password has been sent to the email
              address {registerUsername}. Next, the customer will need to veiry
              their account and set up a password, which they can do by clicking
              on the email.
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
        </div>
      </div>
    </div>
  );
}
