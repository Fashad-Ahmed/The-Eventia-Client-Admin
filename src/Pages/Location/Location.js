import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import { SERVER_URL } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Location = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      await fetch(SERVER_URL + "/location/fetchLocation", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res.newLocation);
          setData(res.newLocation);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (value, tableMeta, updateValue) => {
    console.log(value);
    console.log(tableMeta);
    console.log(updateValue);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: tableMeta.rowData[0] }),
    };
    fetch(SERVER_URL + "/location/delete", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    { name: "_id", label: "ID", options: { display: "false" } },
    { name: "name", label: "Name" },
    { name: "price", label: "Price" },
    {
      name: "Delete",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button onClick={() => handleDelete(value, tableMeta, updateValue)}>
              <DeleteIcon />
            </button>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    selectableRows: "none",
    print: false,
    viewColumns: false,
    download: false,
    search: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    responsive: "stacked",
    fixedHeader: true,
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Button variant="contained" color="primary">
          <Link to="/location/create">Create + </Link>
        </Button>
      </div>
      <div>
        <MUIDataTable
          title="Event List"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default Location;
