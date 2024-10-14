import { redirect } from "next/navigation";
import { Input, Button,Box, FormControl } from "@mui/material";
import {Search} from "lucide-react"


async function handleSearch(formData) {
  "use server"; 
  
  const q = formData.get("q");

  if (q) {
    redirect(`/search?q=${encodeURIComponent(q)}`);
  } else {
    redirect("/"); 
  }
}

export default function SearchUsr() {
  return (
    <Box>
      <form action={handleSearch} className="items-center justify-center flex p-5">
        <Input name="q" placeholder="Search" className="bg-white"/>
        <Button type="submit" className="gap-4 border-l-rose-700">Search<Search size={20}/></Button>
      </form>
    </Box>
  );
}
