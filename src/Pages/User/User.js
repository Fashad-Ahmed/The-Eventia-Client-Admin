import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import { SERVER_URL } from "../../constants";

const User = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      await fetch(SERVER_URL + "/auth/fetchAll", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          setData(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (value, tableMeta, updateValue) => {
    console.log(value);
    console.log(tableMeta);
    console.log(updateValue);

    // apply delete on data
    // const newData = data.filter((item) => item._id !== value);
    // setData(newData);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: tableMeta.rowData[0] }),
    };
    fetch(SERVER_URL + "/auth/delete", requestOptions)
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
    { name: "userName", label: "Name", options: { filter: true, sort: true } },
    { name: "email", label: "Email" },
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
      <MUIDataTable
        title="User List"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default User;
