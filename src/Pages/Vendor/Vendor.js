import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import { SERVER_URL } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Vendor = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      axios.get(SERVER_URL + "/vendor/fetchVendor").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(SERVER_URL + "/vendor/fetchVendor").then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (value, tableMeta, updateValue) => {
    console.log(value);
    console.log(tableMeta);
    console.log(updateValue);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: tableMeta.rowData[0] }),
    };
    fetch(SERVER_URL + "/vendor/delete", requestOptions)
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
    { name: "description", label: "Description" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "cId", label: "Hash ID" },
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

  return (
    <div>
      <div>
        <Button variant="contained" color="primary">
          <Link to="/vendor/create">Create + </Link>
        </Button>
      </div>
      <div>
        <MUIDataTable
          title="Vendor List"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  );
};

export default Vendor;
