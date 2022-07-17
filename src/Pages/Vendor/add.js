import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVendor = (props) => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    const user = {
      name,
      description,
      phoneNumber: category,
      cId: localStorage.getItem("token"),
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    try {
      await fetch(SERVER_URL + "/vendor/createVendor", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          navigate("/ecommerce");
        });
    } catch (err) {
      toast.error("Invalid", {
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

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 400,
    margin: "20px auto",
  };
  const btnstyle = { textAlign: "center", marginBottom: "10px" };
  const fieldStyle = { margin: "12px 0" };

  return (
    <div className="main">
      <Grid>
        <Paper elevation={50} style={paperStyle}>
          <Grid align="left">
            <div>{/* <h2 style={headerStyle}>Add</h2> */}</div>
          </Grid>

          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Name"
            name="name"
            placeholder="Enter name"
            style={fieldStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Description"
            name="description"
            placeholder="Enter description"
            style={fieldStyle}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="PhoneNumber"
            name="phoneNumber"
            placeholder="Enter PhoneNumber"
            style={fieldStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Price"
            name="price"
            placeholder="Enter price"
            style={fieldStyle}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            Submit
          </Button>
          <Button
            type="click"
            color="primary"
            variant="outlined"
            onClick={() => navigate("/ecommerce")}
            style={btnstyle}
            fullWidth
          >
            Cancel
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default AddVendor;
