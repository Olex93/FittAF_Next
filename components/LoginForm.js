import React, { useState } from "react";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import Router from "next/router";

const LoginForm = (props) => {
  const [loginUsername, setloginUsername] = useState("");
  const [name, setName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "https://task-share-api.herokuapp.com",
      withCredentials: true,
    },
  };

  const login = () => {
    const lcUsername = loginUsername.toLocaleLowerCase()
    axios({
      method: "POST",
      data: {
        username: lcUsername,
        password: loginPassword,
      },
      withCredentials: true,
      // url: "http://localhost:4000/api/login",
      url: "https://fitt-af-auth-api.herokuapp.com/api/login",
      axiosConfig

    }).then((res) => {
      if (res.data == "Successfully Authenticated") {
        console.log(res.data)
        dispatch({
          type: "LOG_IN",
        });
        Router.push("/");
      } else {
        setError(res.data);
      }
    });
  };


  return (
    <div>
      <h1>login</h1>
      <input
        placeholder="username"
        onChange={(e) => setloginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setloginPassword(e.target.value)}
      />
      <button className="btn grow light formBtn" onClick={login}>
        Submit
      </button>
      {error && (
        <div className="mt-3">
          <p>
            <i>{error}.</i>
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(LoginForm);
