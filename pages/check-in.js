import React, { useState } from "react";
import axios from "axios";

export default function CheckIn() {
  const [name, setName] = useState("");
  const [numberOfWorkouts, setNumberOfWorkouts] = useState(null);
  const [stepTarget, setStepTarget] = useState(null);
  const [nutritionTarget, setNutritionTarget] = useState(null);
  const [comments, setComments] = useState(null);
  const [blockQuote, setBlockQuote] = useState(
    "I've had a great week this week and below are my wins for the week:"
  );
  const [color, setColor] = useState("green");
  const [activeState, setActiveState] = useState("activeGreen");
  let date = new Date().toLocaleString();

  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const resetFields = () => {
    setName("");
    setNumberOfWorkouts("");
    setStepTarget("");
    setNutritionTarget("");
    setComments("");
    setBlockQuote("");
    setColor("green");
    setActiveState("activeGreen");
  };

  const formSubmission = {
    name: name,
    numberOfWorkouts: numberOfWorkouts,
    stepTarget: stepTarget,
    nutritionTarget: nutritionTarget,
    comments: comments,
    blockQuote: blockQuote,
    color: color,
    date: date,
  };

  const selectColorAndActive = (className) => {
    setActiveState(className);
    if (className === "activeGreen") {
      setColor("green");
      setBlockQuote(
        "I've had a great week this week and below are my wins for the week:"
      );
    }
    if (className === "activeAmber") {
      setColor("amber");
      setBlockQuote(
        "It's been a good week but I have left a queston/struggle below that I need more support with:"
      );
    }
    if (className === "activeRed") {
      setColor("red");
      setBlockQuote(
        "This week hasn't been the best, I've struggled with the following:"
      );
    }
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "https://task-share-api.herokuapp.com",
      "withCredentials": true,
    },
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fitt-af-auth-api.herokuapp.com/api/check-in",
                // "http://localhost:4000/api/check-in",
        formSubmission,
        axiosConfig
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
    <div className="signupBg">
      <div style={{ maxWidth: "700px" }}>
        {messageSent && (
          <>
            <h1 className="signupHeading">Thanks for checking in!</h1>
            <p>
              We&apos;re excited to see how you&apos;ve been getting on and how we can
              continue to support you.
            </p>
          </>
        )}
        {errorMessage && (
          <>
            <h1 className="signupHeading">Uh oh</h1>
            <p>
              We&apos;ve had a bit of a technical issue. Please contact us directly
              on <a href="mailto:Fittafmail@gmail.com">Fittafmail@gmail.com</a>{" "}
              to let us know how you&apos;ve been getting on.
            </p>
          </>
        )}
        {!messageSent && !errorMessage && (
          <>
            <h1 className="signupHeading">Weekly client check in</h1>
            <p>
              After setting monthly goals with us over the phone it???s important
              to stay accountable to them weekly. Let us know how you&apos;ve gotten
              on by filling in the form below.
            </p>
            <p>
              If you have any questions about your goals please WhatsApp us.
            </p>
            <div>
              <form className="checkInForm">
                <label className="formLabel" htmlFor="name">
                  Name
                  <input
                    className="formInput"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="formLabel" htmlFor="numberOfWorkouts">
                  How many workouts have you been assigned, and how many have
                  you completed this week?
                  <input
                    className="formInput"
                    type="text"
                    name="numberOfWorkouts"
                    placeholder="(Eg ???3/3 I completed them all???)"
                    required
                    value={numberOfWorkouts}
                    onChange={(e) => setNumberOfWorkouts(e.target.value)}
                  />
                </label>
                <label className="formLabel" htmlFor="stepTarget">
                  What is your step target and what did you average this week?
                  <input
                    className="formInput"
                    type="text"
                    name="stepTarget"
                    placeholder="(Eg ???10k target, 8k average???)"
                    required
                    value={stepTarget}
                    onChange={(e) => setStepTarget(e.target.value)}
                  />
                </label>
                <label className="formLabel" htmlFor="nutritionTarget">
                  What are your nutrition targets and what numbers did you
                  average this week?
                  <input
                    className="formInput"
                    type="text"
                    name="nutritionTarget"
                    placeholder="(Eg ???140g protein target, and I reached it 6/7 days)"
                    required
                    value={nutritionTarget}
                    onChange={(e) => setNutritionTarget(e.target.value)}
                  />
                </label>

                <label className="colorLabel" htmlFor="optradio">
                  Click the color that best describes your week and leave a
                  comment below so we can give you the support that you need.
                </label>
                <div className="radio-div row">
                  <div
                    className={"circle green" + " " + activeState}
                    onClick={() => selectColorAndActive("activeGreen")}
                  ></div>
                  <div
                    className={"circle amber" + " " + activeState}
                    onClick={() => selectColorAndActive("activeAmber")}
                  ></div>
                  <div
                    className={"circle red" + " " + activeState}
                    onClick={() => selectColorAndActive("activeRed")}
                  ></div>
                </div>
                <textarea
                  readOnly
                  name="quote"
                  className="radioQuote"
                  value={blockQuote}
                ></textarea>
                <textarea
                  className="comments"
                  name="comments"
                  rows="3"
                  cols="80"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
                <button
                  onClick={(e) => postData(e)}
                  name="button"
                  className="light grow btn"
                >
                  SEND
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
