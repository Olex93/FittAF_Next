import React, { useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {logIn, logOut} from '../actions'

function TestAuth() {

  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  
  console.log(globalState)

  const [name, setName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  
  const login = () => {
    const data = {
      username: loginUsername,
      name: name,
      password: loginPassword,
    };
    let json = JSON.stringify(data);
    // fetch('https://fitt-af-auth-api.herokuapp.com/api/login', {
      fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
    .then(response => response.json())
    .then(res => {
      console.log('Response from api login: ', res);
      if (res.token) {
        dispatch(logIn(res.token))
      }
    })
    .catch(() => {
      if (err) {
        alert('There was an error logging in.');
      }
    })
  };

  const logUserOut = () => {
    Axios({
      method: "GET",
      // url: "http://localhost:4000/api/logout",
      url: "https://fitt-af-auth-api.herokuapp.com/api/logout",
    }).then((res) => {
      // setData(res.data);
      dispatch(logOut(res.token))
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
        {/* <button onClick={register}>Submit</button> */}
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
        <p>{globalState.loggedIn}</p>
      </div>
{/* 
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div> */}

      <div>
        <h1>Log out</h1>
        <button onClick={logUserOut}>Submit</button>
      </div>
    </div>
  );
}

export default TestAuth;
