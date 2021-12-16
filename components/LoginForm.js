import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../actions";
import Router from "next/router";
import Alert from "@mui/material/Alert";
import Link from "next/link";

const LoginForm = (props) => {
  const [loginUsername, setloginUsername] = useState("");
  const [name, setName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const login = () => {
    const data = {
      username: loginUsername,
      name: name,
      password: loginPassword,
    };
    let json = JSON.stringify(data);
    // fetch("https://fitt-af-auth-api.herokuapp.com/api/login", {
      fetch('http://localhost:4000/api/login', {
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
        if (res.token) {
          dispatch(logIn(res.token, res.userID, res.goals));
          Router.push("/");
        }
        if (res.error) {
          setError(res.error);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err)
          alert("There was an error logging in.");
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setloginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setloginPassword(e.target.value)}
      />
      <button className="btn grow light formBtn" onKeyDown={login}  onClick={login}>
        Submit
      </button>
      {error && (
        <div className="mt-3">
          <Alert severity="error">{error}</Alert>
          <div className="mt-4">
            <Link href="forgotten-password"><a>Forgotten password</a></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
