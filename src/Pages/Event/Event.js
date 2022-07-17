import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import { SERVER_URL } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Event = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      axios.get(SERVER_URL + "/event/fetchEvent").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (value, tableMeta, updateValue) => {
    console.log(value);
    console.log(tableMeta);
    console.log(updateValue);

    // filter deleted value from data
    const newData = data.filter((item) => item[0] !== tableMeta.rowData[0]);
    setData(newData);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: tableMeta.rowData[0] }),
    };
    fetch(SERVER_URL + "/event/delete", requestOptions)
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
    { name: "name", label: "Name", options: { filter: true, sort: true } },
    { name: "description", label: "Description" },
    { name: "category", label: "Category" },
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
    console.log("Fetch Data");
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div>
          <Button variant="contained" color="primary">
            <Link to="/event/create">Create + </Link>
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
    </>
  );
};

export default Event;
