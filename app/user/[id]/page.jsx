"use client";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  List,
  ListItem,
} from "@mui/material";

import { UserX } from "lucide-react";

export default function User({ params }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`https://dummyjson.com/users/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error("failed");
      }
      setLoading(false);
    }

    fetchUserData();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div>
        <UserX />
        No user found
      </div>
    );
  }

  return (
    <Card sx={{ width: "500px" }} className="m-auto mt-10">
      <CardActionArea className="items-center justify-center flex flex-col mt-5 p-10">
        <CardMedia image={user.image} component="img" className="w-20" />
        <CardContent>
          <Typography className="text-2xl">
            {user.firstName} {user.lastName}
          </Typography>
        </CardContent>
        <List className="text-center">
          <ListItem>ID : {user.id}</ListItem>
          <ListItem>Email: {user.email}</ListItem>
          <ListItem>Phone: {user.phone}</ListItem>
          <ListItem>Age: {user.age}</ListItem>
          <ListItem>Gender : {user.gender}</ListItem>
          <ListItem>Birth Date : {user.birthDate}</ListItem>
        </List>
      </CardActionArea>
    </Card>
  );
}
