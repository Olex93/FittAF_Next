import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";

export default function Verify() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCreated, setPasswordCreated] = useState(false);

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const verifyCode = () => {
    const data = {
      username: email,
      code: code,
    };
    let json = JSON.stringify(data);
    // url: "https://fitt-af-auth-api.herokuapp.com/api/verify",
    fetch("http://localhost:4000/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Response from api login: ", res);
        if (res == "Successfully verified") {
          setVerified(true);
        }
      });
  };

  const sendPassword = () => {
    const data = {
      username: email,
      password: password,
    };
    let json = JSON.stringify(data);
    // url: "https://fitt-af-auth-api.herokuapp.com/api/first-time-password",
    fetch("http://localhost:4000/api/first-time-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("Response from api login: ", res);
        if (res.message == "password change successful") {
          setPasswordCreated(true);
        }
      });
  };

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
      {!verified && !passwordCreated && (
        <div>
          <h1>Let&apos;s get you set up</h1>
          <p>
            First of all, please enter your email address as well as your one
            time password so that we can verify you&apos;re a genuine Fitt AF
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
          {password.length < 8 && (
            <p>
              <i>Your password must be at least 8 characters in length</i>
            </p>
          )}
          {password.length >= 8 && (
            <p>
              <i>Awesome, your password is a good length</i>
            </p>
          )}

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
          <h1>Awesome! You&apos;re all set up</h1>
          <p>Login to access the members only Fitt AF content library.</p>
          <LoginForm />
        </div>
      )}
    </div>
  );
}
