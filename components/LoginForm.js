import React, { useState } from "react";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import Router from 'next/router'

const LoginForm = (props) => {
  const [loginUsername, setloginUsername] = useState("");
  const [name, setName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [data, setData] = useState(null);

  const dispatch = useDispatch();

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/login",
    }).then((res) => {
      if (res.data) {
        dispatch({
          type: "LOG_IN",
        });
      }
      console.log(res.data);
      if (res.data.name !== null ) {
        Router.push('/')
      }
    })
  };

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
      <div>
        <h1>login</h1>
        <input
          placeholder="username"
          onChange={(e) => setloginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setloginPassword(e.target.value)}
        />
        <button className="btn grow light formBtn" onClick={login}>Submit</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(LoginForm);
