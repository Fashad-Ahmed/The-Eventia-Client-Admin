import React, { useState } from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { SERVER_URL } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    try {
      await fetch(SERVER_URL + "/auth/signin", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("token", res.userExist._id);
          navigate("/ecommerce");
        });
    } catch (err) {
      toast.error("Invalid Credentials", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.clear();
    }
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 400,
    margin: "20px auto",
  };
  const headerStyle = { margin: 0, paddingTop: 5 };
  const btnstyle = { textAlign: "center", marginBottom: "10px" };
  const fieldStyle = { margin: "12px 0" };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="left">
          <div>
            <h2 style={headerStyle}>Log in</h2>
          </div>
          <Typography variant="caption" style={{ color: "grey" }} gutterBottom>
            Get started for free
          </Typography>
        </Grid>

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          name="email"
          placeholder="Enter email"
          style={fieldStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          name="password"
          placeholder="Enter password"
          style={fieldStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
          required
        />
        <Button
          type="click"
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          style={btnstyle}
          fullWidth
        >
          Sign In
        </Button>
        <Link to="/">
          <Typography variant="caption" style={{ color: "blue" }}>
            {" "}
            Do you have an account ? Sign Up
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Login;
