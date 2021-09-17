import React, { useState } from "react";
import axios from "axios";
export default function RegisterForm() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [name, setName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    axios({
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

  return (
    <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          minlength="8"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button className="btn grow light formBtn" onClick={register}>Submit</button>
      </div>
    </div>
  );
}
