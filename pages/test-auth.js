import React, { useState } from "react";
import Axios from "axios";

function TestAuth() {
  const [name, setName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        name: name,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/register",
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
      url: "http://localhost:4000/api/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const logOut = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/api/logout",
    }).then((res) => {
      // setData(res.data);
      console.log(res);
    });
  }
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