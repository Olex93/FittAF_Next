import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";

export default function Verify() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCreated, setPasswordCreated] = useState(false);

  
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      withCredentials: true,
    },
  };

  const verifyCode = () => {
    axios({
      method: "POST",
      data: {
        username: email,
        code: code,
      },
      withCredentials: true,
      // url: "http://localhost:4000/api/verify",
      url: "https://fitt-af-auth-api.herokuapp.com/api/verify",
      // axiosConfig
    }).then((res) => {
      if (res.data == "Success") {
        setVerified(true);
      }
    });
  };

  const sendPassword = () => {
    axios({
      method: "POST",
      data: {
        username: email,
        password: password,
      },
      withCredentials: true,
      // url: "http://localhost:4000/api/first-time-password",
      url: "https://fitt-af-auth-api.herokuapp.com/api/first-time-password",
      // axiosConfig

    }).then((res) => {
      if (res.data == "Success") {
        setPasswordCreated(true);
      }
    });
  };

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
      {!verified && !passwordCreated && (
        <div>
          <h1>Let`&apos;`s get you set up</h1>
          <p>
            First of all, please enter your email address as well as your one
            time password so that we can verify you`&apos;`re a genuine Fitt AF
            customer.
          </p>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="One time password"
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn grow light formBtn" onClick={verifyCode}>
            Submit
          </button>
        </div>
      )}
      {verified && !passwordCreated && (
        <div>
          <h1>Thanks!</h1>
          <p>
            Final step. Please choose a password that you will be able to use to
            login to your account with.
          </p>
          {password.length < 8 && <p><i>Your password must be at least 8 characters in length</i></p>}
          {password.length >= 8 && <p><i>Awesome, your password is a good length</i></p>}

          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            minLength="8"
          />
          <button className="btn grow light formBtn" onClick={sendPassword}>
            Submit
          </button>
        </div>
      )}
      {verified && passwordCreated && (
        <div>
          <h1>Awesome! You`&apos;`re all set up</h1>
          <p>Login to access the members only Fitt AF content library.</p>
          <LoginForm />
        </div>
      )}
    </div>
  );
}
