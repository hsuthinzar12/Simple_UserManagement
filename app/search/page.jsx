import UserList from "@/components/UserList";
import { UserSearch } from "lucide-react";
import { Typography, Box } from "@mui/material";
async function fetchUsers() {
  const res = await fetch(`https://dummyjson.com/users`);
  return await res.json();
}

export default async function Search({ searchParams }) {
  const { q } = searchParams;

  const allUsers = await fetchUsers();

  const filteredUsers = allUsers.users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(q.toLowerCase()) ||
      user.lastName.toLowerCase().includes(q.toLowerCase())
  );

  const viewType = "table";

  return (
    <Box>
      <Typography
        variant="h2"
        className="text-lg font-bold mb-4 pb-2 border-b items-center justify-center flex gap-2"
      >
        <UserSearch />
        Search : {q}
      </Typography>
      <UserList userlist={filteredUsers} viewType={viewType} />
    </Box>
  );
}
