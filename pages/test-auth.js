import React, { useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {logIn} from '../actions'

function TestAuth() {

  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  
  console.log(globalState)

  const [name, setName] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);


  // const axiosConfig = {
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     "Access-Control-Allow-Origin": "https://task-share-api.herokuapp.com",
  //     withCredentials: true,
  //   },
  // };

  const register = async () => {
    const data = {
      username: registerUsername,
      name: name,
      password: registerPassword,
    };
    let json = JSON.stringify(data);
    fetch("http://localhost:4000/api/register", {
      // fetch('https://fitt-af-auth-api.herokuapp.com/api/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.user !== undefined) {
          // dispatch({ type: "REGISTERED_USER", registeredUser: true });
        }
      })
      .catch((error) => {
        console.log("Registration error: " + error);
        alert("There was an error creating your account.");
      })
  };

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
      dispatch(logIn())
      // if (res.error) {
      //   alert(res.error);
      // } else {
      //   AsyncStorage.setItem('jwt', res.token);
      //   // alert(`Success! You may now access protected content.`);
      //   // Redirect to home screen
      //   // this.props.navigator.pop()
      //   if (res.verifiedUser === "true") {
      //     // console.log('Friendship code returned from login api: ' + res.friendshipCode)
      //     dispatch({type: 'LOGGED_IN_USER', loggedInUser: true, verifiedUser: true});
      //   } else {
      //     dispatch({type: 'LOGGED_IN_USER', loggedInUser: true, userID: res.userID, verifiedUser: false});
      //   }
      // }
    })
    .catch(() => {
      alert('There was an error logging in.');
    })
  };
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     // url: "http://localhost:4000/user",
  //     url: "https://fitt-af-auth-api.herokuapp.com/user",
  //     axiosConfig,
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };
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
        <button onClick={logOut}>Submit</button>
      </div>
    </div>
  );
}

export default TestAuth;
