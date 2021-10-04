import React, { useState } from "react";
import Axios from "axios";

function TestAuth() {
  const [name, setName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  Axios.defaults.withCredentials = true;
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": true,
      withCredentials: true,
    },
  };

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        name: name,
        password: registerPassword,
      },
      withCredentials: true,
      // url: "http://localhost:4000/api/register",
      url: "https://fitt-af-auth-api.herokuapp.com/api/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        name: name,
        password: loginPassword,
      },
      withCredentials: true,
      // url: "http://localhost:4000/api/login",
      url: "https://fitt-af-auth-api.herokuapp.com/api/login",
      // axiosConfig
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      // url: "http://localhost:4000/user",
      url: "https://fitt-af-auth-api.herokuapp.com/user",
      // headers: {
      //   crossDomain: true, 'Content-Type': 'application/json'
      // },
      withCredentials: true,
      // crossDomain: true,
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const logOut = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      // url: "http://localhost:4000/api/logout",
      url: "https://fitt-af-auth-api.herokuapp.com/api/logout",
      axiosConfig,
    }).then((res) => {
      // setData(res.data);
      console.log(res);
    });
  };
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>

      <div>
        <h1>Log out</h1>
        <button onClick={logOut}>Submit</button>
      </div>
    </div>
  );
}

export default TestAuth;
