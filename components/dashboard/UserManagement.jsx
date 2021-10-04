import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../scss/userManagement.module.scss";
import otherStyles from "../../scss/dashboard.module.scss";
import DoneIcon from "@mui/icons-material/Done";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateGoals } from "../../actions";


const UserManagement = () => {
  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [editingMode, setEditingMode] = useState(null);
  const [newGoalText, setNewGoalText] = useState("");
  const [oldGoalText, setOldGoalText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null)

  const toggleEditing = (index) => {
    setEditingMode(index);
  };

  const startEditingText = (index, userID) => {
    setSelectedUser(userID)
    setOldGoalText(globalState.goals[index]);
    toggleEditing(index);
  };

  const saveEditedText = (userID) => {
      console.log(userID)
    if (newGoalText !== "") {
      const data = {
        userID: userID,
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
            let goals = res.newGoals
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
    setNewGoalText("")
    toggleEditing(null);
    setSelectedUser(null)
  };



  
  const deleteGoal = (goalText, userID) => {
    const data = {
      userID: userID,
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
  };


  useEffect(() => {
    // fetch("https://fitt-af-auth-api.herokuapp.com/api/users", {
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${globalState.jwt}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log("Response from api login: ", res);
        if ((res.success = true)) {
          setUserData(res.protectedUsers);
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
  }, [globalState.jwt, globalState.goals]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Manage Fitt AF Users</h1>
          {userData !== null && (
            <div className="row">
              {userData.map((user, index) => (
                <div key={index} className="col-12">
                  <div className={styles.userHeadingRow}>
                    <div className={styles.userIndex}>{index + 1}</div>
                    <p className={styles.userHeading}>{user.username}</p>
                  </div>
                  <div className="userGoals row">

                    {user.goals.map((goal, index) => (
                      <div className={`col-12 ${otherStyles.goals}`} key={index}>
                        {editingMode !== index && (
                          <div className={otherStyles.goalRow}>
                            <div className={otherStyles.goalContent}>
                              <div className={otherStyles.goalNumber}>
                                {index + 1}
                              </div>
                              <div>
                                <p className={otherStyles.goalText}>{goal}</p>
                              </div>
                            </div>
                            <div className={otherStyles.iconsContent}>
                              <span className={otherStyles.edit}>
                                <EditIcon
                                  onClick={() => startEditingText(index, user.userID)}
                                />
                              </span>
                              <span className={otherStyles.delete}>
                                <DeleteIcon onClick={() => deleteGoal(goal, user.userID)} />
                              </span>
                            </div>
                          </div>
                        )}
                        {editingMode == index && selectedUser == user.userID && (
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
                            className={otherStyles.editGoalInput}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <DoneIcon
                                    className={otherStyles.doneIcon}
                                    onClick={() => saveEditedText(user.userID)}
                                  />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
