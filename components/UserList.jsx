"use client";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import React from "react";
import { Box, Typography } from "@mui/material";
import {UserX} from "lucide-react";

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

export default function UserList({ userlist, viewType }) {
  if (!userlist || userlist.length === 0) {
    return <Typography className="flex items-center gap-2 text-lg h-full justify-center"> <UserX color="#C62E2E"/>No users found.</Typography>;
  }

  const handleRowClick = (params) => {
    window.location.href = `/user/${params.id}`;
  };

  if (viewType === "table") {
    return (
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userlist}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
          onRowClick={handleRowClick}
        />
      </Paper>
    );
  }

  return (
    <Box className="flex flex-wrap gap-4 justify-evenly">
      {userlist.map((user) => (
        <Typography className="w-[200px] text-center" key={user.id}>

        </Typography>
      ))}
    </Box>
  );
}
