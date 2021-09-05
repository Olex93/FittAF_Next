import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

export default function Start() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)

  const resetFields = () => {
    setName("");
    setPhone("");
    setGoal("");
    setEmail("");
  };

  const formSubmission = {
    name: name,
    phone: phone,
    goal: goal,
    email: email,
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fittaf.herokuapp.com/start",
        formSubmission,
        axiosConfig
      );
      if (response.data === "success") {
        resetFields();
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(true)
    }
  };

  return (
    <>
      <Head>
        <title>Fitt AF - Start a membership</title>
        <meta name="description" content="Let&apos;s get going with a Fitt AF membership!" />
      </Head>

      <div className="signupBg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              {messageSent && (
                <>
                  <h1 className="signupHeading">Your message has been sent</h1>
                  <p>
                    Thanks for reaching out, we can&apos;t wait to find out how we
                    can help. We&apos;ll be in touch soon!
                  </p>
                </>
              )}
              {errorMessage && (
                <>
                  <h1 className="signupHeading">Uh oh</h1>
                  <p>
                    We&apos;ve had a bit of a technical issue. Please contact us directly on <a href="mailto:Fittafmail@gmail.com">Fittafmail@gmail.com</a>.
                  </p>
                </>
              )}
              {!messageSent && !errorMessage && (
                <>
                  <h1 className="signupHeading">Let&apos;s Go</h1>
                  <p>
                    Fill in your details below and we&apos;ll be in touch to get you
                    signed up!
                  </p>
                  <div>
                    <form>
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="contactNumber">Contact Number*</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label htmlFor="goal">Number one goal</label>
                      <textarea
                        name="goal"
                        rows="2"
                        cols="80"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                      ></textarea>
                      <button
                        type="submit"
                        name="button"
                        className="light grow btn"
                        onClick={(e) => sendMessage(e)}
                      >
                        SEND
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>

            <div className="col-md-6 order-md-2 my-auto imgDiv"></div>
          </div>
        </div>
      </div>
    </>
  );
}
