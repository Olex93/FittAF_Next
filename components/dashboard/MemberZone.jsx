import React, { useState, useEffect } from "react";
import MuiCard from "../MuiCard";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../scss/dashboard.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateGoals } from "../../actions";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import DoneIcon from "@mui/icons-material/Done";
import { style } from "@mui/system";

function MemberZone(props) {
  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(null);
  const [newGoalText, setNewGoalText] = useState("");
  const [oldGoalText, setOldGoalText] = useState("");
  const [addGoalText, setAddGoalText] = useState("");

  const toggleEditing = (index) => {
    setEditingMode(index);
  };

  const startEditingText = (index) => {
    setOldGoalText(globalState.goals[index]);
    toggleEditing(index);
  };

  const saveEditedText = () => {
    if (newGoalText !== "") {
      const data = {
        userID: globalState.userID,
        oldGoalText: oldGoalText,
        newGoalText: newGoalText,
      };

      let json = JSON.stringify(data);
      // fetch("https://fitt-af-auth-api.herokuapp.com/api/edit-goal", {
      fetch("http://localhost:4000/api/edit-goal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `JWT ${globalState.jwt}`,
        },
        body: json,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("Response from api login: ", res);
          if ((res.success = true)) {
            console.log("success");
            let goals = res.newGoals;
            dispatch(updateGoals(goals));
          }
          if (res.error) {
            setError(res.error);
          }
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    }
    setNewGoalText("");
    toggleEditing(null);
  };

  useEffect(() => {
    // fetch("https://fitt-af-auth-api.herokuapp.com/api/goals", {
    fetch("http://localhost:4000/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${globalState.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Response from api login: ", res);
        if ((res.success = true)) {
          dispatch(updateGoals(res.goals));
        }
        if (res.error) {
          setError(res.error);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [dispatch, globalState.jwt]);

  const deleteGoal = (goalText) => {
    const data = {
      userID: globalState.userID,
      deleteGoal: goalText,
    };
    let json = JSON.stringify(data);
    // fetch("https://fitt-af-auth-api.herokuapp.com/api/delete-goal", {
    fetch("http://localhost:4000/api/delete-goal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${globalState.jwt}`,
      },
      body: json,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("Response from api login: ", res);
        if ((res.success = true)) {
          console.log("success");
          dispatch(updateGoals(res.newGoals));
          //   Router.push("/");
        }
        if (res.error) {
          setError(res.error);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          //   alert("There was an error logging in.");
        }
      });
  };

  const addNewGoal = () => {
    if (addGoalText !== "") {
      const data = {
        userID: globalState.userID,
        goal: addGoalText,
      };
      let json = JSON.stringify(data);
      // fetch("https://fitt-af-auth-api.herokuapp.com/api/add-goal", {
      fetch("http://localhost:4000/api/add-goal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `JWT ${globalState.jwt}`,
        },
        body: json,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("Response from api login: ", res);
          if ((res.success = true)) {
            console.log("success");
            dispatch(updateGoals(res.goals));
          }
          if (res.error) {
            setError(res.error);
          }
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
      setAddGoalText("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Welcome to your member zone</h1>
          <p>
            Welcome to the FITT AF hub, this is here to compliment your coaching
            from us. Built to educate you beyond just following your programme.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4">
            <strong>Your personal goals</strong>
          </h2>
          {globalState.goals !== undefined && (
            <>
              {globalState.goals.length > 0 && (
                <div className="row">
                  {globalState.goals.map((goal, index) => (
                    <div className={`col-12 ${styles.goals}`} key={index}>
                      {editingMode !== index && (
                        <div className={styles.goalRow}>
                          <div className={styles.goalContent}>
                            <div className={styles.goalNumber}>{index + 1}</div>
                            <div>
                              <p className={styles.goalText}>{goal}</p>
                            </div>
                          </div>
                          <div className={styles.iconsContent}>
                            <span className={styles.edit}>
                              <EditIcon
                                onClick={() => startEditingText(index)}
                              />
                            </span>
                            <span className={styles.delete}>
                              <DeleteIcon onClick={() => deleteGoal(goal)} />
                            </span>
                          </div>
                        </div>
                      )}
                      {editingMode == index && (
                        <TextField
                          id="outlined-basic"
                          label={goal}
                          value={newGoalText}
                          onChange={(e) => setNewGoalText(e.target.value)}
                          variant="filled"
                          sx={{
                            backgroundColor: "white",
                            borderBottom: "none",
                            borderRadius: 0,
                            marginBottom: "10px",
                          }}
                          className={styles.editGoalInput}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <DoneIcon
                                  className={styles.doneIcon}
                                  onClick={() => saveEditedText(index)}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {globalState.goals !== undefined && (
            <>
              {globalState.goals.length == 0 && (
                <div className="row">
                  <div className="col-12">
                    <p>
                      You haven&apos;t set any goals yet. Both you and the Fitt
                      AF team can set and edit your personal goals.
                    </p>
                    <p>Add a few goals below to get started.</p>
                  </div>
                </div>
              )}
            </>
          )}

          <div className="row">
            <div className="col-12">
              <TextField
                id="filled-basic"
                label="Enter a new goal here"
                variant="filled"
                multiline
                value={addGoalText}
                onChange={(e) => setAddGoalText(e.target.value)}
                className="mt-3"
                sx={{ display: "block" }}
              />
              <button
                className=" btn grow light"
                type="button"
                name="button"
                onClick={() => addNewGoal()}
              >
                Add Goal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 mt-5">
          <h2>
            <strong>Your resources</strong>
          </h2>
        </div>
        <div className="col-12 col-xl-4 col-lg-6 mt-4">
          <MuiCard
            linkTo="exercise-demo"
            displayedPage={props.displayedPage}
            setDisplayedPage={props.setDisplayedPage}
            title="Excercise Demos"
            description="Video demonstrations for key excercises in your training plan."
          />
        </div>
        <div className="col-12 col-xl-4 col-lg-6 mt-4">
          <MuiCard
            linkTo="nutrition-info"
            displayedPage={props.displayedPage}
            setDisplayedPage={props.setDisplayedPage}
            title="Nutrition Info"
            description="Watch educational videos relating to nutrition."
          />
        </div>
        <div className="col-12 col-xl-4 col-lg-6 mt-4">
          <MuiCard
            linkTo="nutrition-info"
            displayedPage={props.displayedPage}
            setDisplayedPage={props.setDisplayedPage}
            title="Ask the community"
            description="The best place to get your questions answered is in the Facebook group. Click here to visit."
          />
        </div>
      </div>
    </div>
  );
}

export default MemberZone;
