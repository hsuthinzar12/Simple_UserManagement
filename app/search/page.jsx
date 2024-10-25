import UserList from "@/components/UserList";
import { UserSearch } from "lucide-react";
import { Typography, Box } from "@mui/material";

async function fetchUsers() {
  const res = await fetch(`https://dummyjson.com/users`);
  const data = await res.json();
  return data.users;
}

export default async function Search({ searchParams }) {
  const { q } = searchParams;

  const allUsers = await fetchUsers();
  const filteredUsers = allUsers.filter(
    (user) =>
      user.firstName.toLowerCase().includes(q.toLowerCase()) ||
      user.lastName.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <Box>
      <Typography
        variant="h2"
        className="text-2xl font-bold my-4 pb-2 border-b items-center justify-center flex gap-2"
      >
        <UserSearch />
        Search: {q}
      </Typography>
      <div className="flex gap-4 flex-wrap justify-evenly">
        <UserList userlist={filteredUsers} viewType="table" />
      </div>
    </Box>
  );
}