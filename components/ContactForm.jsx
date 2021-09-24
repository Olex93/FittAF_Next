import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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
      withCredentials: true,
    },
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fitt-af-auth-api.herokuapp.com/contact",
        // "http://localhost:4000/contact",
        formSubmission,
        // axiosConfig
      );
      if (response.data === "success") {
        resetFields();
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(true);
    }
  };

  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 order-2 order-md-1">
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
                  We&apos;ve had a bit of a technical issue. Please contact us
                  directly on{" "}
                  <a href="mailto:Fittafmail@gmail.com">Fittafmail@gmail.com</a>
                  .
                </p>
              </>
            )}
            {!messageSent && !errorMessage && (
              <>
                <h1 className="signupHeading">Ask us a question</h1>
                <p>
                  Send us a message using the form below and we will be in touch
                  as soon as possible!
                </p>

                <div>
                  <form action="/" method="post">
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
                    <label htmlFor="question">Your Question</label>
                    <textarea
                      name="question"
                      rows="4"
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

        </div>
      </div>
    </div>
  );
}

export default ContactForm;
