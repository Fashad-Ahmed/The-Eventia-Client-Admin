import React, { useState, useEffect } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Box from "@material-ui/core/Box";
import { SERVER_URL } from "../constants/index";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login/Login.css";

const Register = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0, paddingTop: 5 };
  const btnStyle = { textAlign: "center", marginBottom: "5px" };
  const fieldStyle = { margin: "12px 0" };

  const onSubmit = (e) => {
    console.log(username, email, password);
    const user = {
      userName: username,
      email,
      password,
      adminStatus: true,
    };
    console.log(user);
    try {
      fetch(SERVER_URL + "/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          console.log("data added successfully");
        })
        .catch(() => {
          console.log("Unable to add  user");
        });
      navigate("/");
    } catch (err) {
      toast.error("User Not Registered", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="left">
          <div>
            <h2 style={headerStyle}>Sign up</h2>
          </div>
          <Typography variant="caption" style={{ color: "grey" }} gutterBottom>
            Get started for free
          </Typography>
        </Grid>

        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          label="Email"
          style={fieldStyle}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Username"
          style={fieldStyle}
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="password"
          fullWidth
          label="Password"
          style={fieldStyle}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box paddingTop={2} />
        <Box paddingTop={2} />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          style={btnStyle}
          onClick={onSubmit}
        >
          Sign up
        </Button>
        <Link to="/">
          <Typography
            variant="caption"
            style={{ color: "blue", marginTop: "10px" }}
            gutterBottom
          >
            Already have an account? Login
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Register;
