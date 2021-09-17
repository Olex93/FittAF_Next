import React, {useState} from "react";
import axios from "axios";


export default function Register() {
  const [registerUsername, setRegisterUsername] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
      },
      withCredentials: true,
      url: "http://localhost:4000/api/register-client",
    }).then((res) => console.log(res));
  };

  return (
    <div className="signupBg">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 pt-5">
        <div>
          <h1>Register a new client</h1>
          <p>Enter the email address of a new client below. They will receive an email that allows them to set their password and then login to their account.</p>
          <input
            placeholder="email"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <button className="btn grow light formBtn" onClick={register}>
            Submit
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
