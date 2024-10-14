import { Box, Typography } from "@mui/material";
import { Users} from "lucide-react";
export default function Header() {
  return (
    <Box>
      <Typography className="flex gap-4 items-center justify-center p-5 bg-pink-400 pink text-white text-3xl"><Users />Simple User Management</Typography>
    </Box>
  )
}