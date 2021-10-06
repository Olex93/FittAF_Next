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
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

const UserManagement = () => {
  const globalState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [editingMode, setEditingMode] = useState(null);
  const [newGoalText, setNewGoalText] = useState("");
  const [oldGoalText, setOldGoalText] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [addGoalUserID, setAddGoalID] = useState(null);
  const [addGoalText, setAddGoalText] = useState("");

  const toggleEditing = (index) => {
    setEditingMode(index);
  };

  const startEditingText = (index, userID, goal) => {
    console.log(userID);
    console.log(goal);
    setSelectedUser(userID);
    setOldGoalText(goal);
    toggleEditing(index);
  };

  const saveEditedText = (userID) => {
    console.log(userID);
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
    setSelectedUser(null);
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
          // const processedUsers = res.protectedUsers.map(({
          //     userID: id,
          //     ...rest
          // }) => ({
          //     id,
          //     ...rest
          // }));

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

  const addNewGoal = (userID) => {
    if (addGoalText !== "") {
      const data = {
        userID: userID,
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
      setAddGoalID(null);
      setAddGoalText("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="signupHeading">Manage Fitt AF Users</h1>
          {userData !== null && (
            <div className="row">
              {/* Map through all users */}
              {userData.map((user, index) => (
                <div key={index} className="col-12">
                  <div className={styles.userHeadingRow}>
                    <div className={styles.userIndex}>{index + 1}</div>
                    <p className={styles.userHeading}>{user.username}</p>
                    <span className={otherStyles.delete}>
                      <AddIcon
                        sx={{
                          color: "white",
                          position: "absolute",
                          top: "50%",
                          right: 10,
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={() => setAddGoalID(user.userID)}
                      />
                    </span>
                  </div>

                  <div className="userGoals row">
                    {/* Map through users goals */}
                    {user.goals.map((goal, index) => (
                      <div
                        className={`col-12 ${otherStyles.goals}`}
                        key={index}
                      >
                        {selectedUser !== user.userID && (
                          <div className={`${otherStyles.goalRow} ${otherStyles.secondaryRow}`}>
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
                                  onClick={() =>
                                    startEditingText(index, user.userID, goal)
                                  }
                                />
                              </span>
                              <span className={otherStyles.delete}>
                                <DeleteIcon
                                  onClick={() => deleteGoal(goal, user.userID)}
                                />
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
                  {user.userID == addGoalUserID && (
                    <div className="newGoalRow row">
                      <div className="col-12">
                        <TextField
                          id="filled-basic"
                          label="Enter a new goal here"
                          variant="filled"
                          size="small"
                          multiline
                          value={addGoalText}
                          onChange={(e) => setAddGoalText(e.target.value)}
                          className="mb-4"
                          sx={{ marginLeft: "25px", width: "80%" }}
                        />
                        <button
                          style={{
                            height: "48px",
                            borderBottom: "1px solid rgba(0, 0, 0, 0.87)",
                            backgroundColor: "#291528",
                            color: "white",
                            padding: "0 15px",
                            fontWeight: 500,
                            borderRadius: "0 5px 5px 0",
                          }}
                          type="button"
                          name="button"
                          onClick={() => addNewGoal(user.userID)}
                        >
                          Add New Goal
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <div className="col-12">
          <>
            {userData !== null && (
              <DataGrid rows={userData} columns={columns} />
            )}
          </>
        </div> */}
      </div>
    </div>
  );
};

export default UserManagement;

const columns = [
  {
    field: "username",
    headerName: "Username",
    width: 150,
    editable: false,
  },
  {
    field: "goals",
    headerName: "Goals",
    width: 250,
    editable: true,
  },
];
