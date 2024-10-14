"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "firstName", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  {
    field: "age",
    headerName: "Age",
    type: "number",
  },
  {
    field:"gender",
    headerName:"Gender",
  },
  {
    field: "email",
    headerName: "Email",
    width:300,
  },
  {
    field: "phone",
    headerName: "Phone",
    width:200,
  },
];


export default function App() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchUserData() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setRows(data.users);
      setLoading(false);
    }
    fetchUserData();
  }, []);

  const paginationModel = { page: 0, pageSize: 5 };

  const handleRowClick = (params) => {
    window.location.href = `/user/${params.id}`;
  };

  return (
    <Paper className="h-full w-100">
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={handleRowClick}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
