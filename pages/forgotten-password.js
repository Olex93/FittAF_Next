import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export default function ForgottenPassword() {
  const globalState = useSelector((state) => state.reducer);
  const router = useRouter();
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCreated, setPasswordCreated] = useState(false);

  const sendCode = () => {
    // console.log(globalState.jwt);
    const data = {
      username: email,
    };
    let json = JSON.stringify(data);

    fetch("https://fitt-af-auth-api.herokuapp.com/api/forgotten-password", {
    // fetch("http://localhost:4000/api/forgotten-password", {
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
        if (res.emailSent == true) {
          setEmailSent(true)
        }
        if (res.error) {
          setError(res.error);
        }
      });
  };


  const verifyCode = () => {
    const data = {
      username: email,
      code: code,
    };
    let json = JSON.stringify(data);

    fetch("https://fitt-af-auth-api.herokuapp.com/api/verify", {
    // fetch("http://localhost:4000/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log("Response from api login: ", res);
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
    fetch("https://fitt-af-auth-api.herokuapp.com/api/first-time-password", {
    // fetch("http://localhost:4000/api/first-time-password", {
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
        // console.log("Response from api login: ", res);
        if (res.message == "password change successful") {
          setPasswordCreated(true);
        }
      });
  };

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
      {!emailSent && !verified && !passwordCreated && (
        <div>
          <h1>Forgotten Password</h1>
          <p>
            No problem. Enter your email address below and we&apos;ll send you a one time password
          </p>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn grow light formBtn" onClick={sendCode}>
            Submit
          </button>
        </div>
      )}
      { !verified && !passwordCreated && emailSent && (
        <div>
          <h1>Enter your verification code</h1>
          <p>
            A verification code has been sent to your email address: {email}. Enter the code below to reset your password.
          </p>
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
