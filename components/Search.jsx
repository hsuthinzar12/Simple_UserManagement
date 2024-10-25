import { redirect } from "next/navigation";
import { Input, Button, Box } from "@mui/material";
import { Search } from "lucide-react";

async function handleSearch(formData) {
  "use server";

  const q = formData.get("q");

  if (q) {
    redirect(`/search?q=${q}`);
  } else {
    redirect("/");
  }
}

export default function SearchUsr() {
  return (
    <Box>
      <form
        action={handleSearch}
        className="flex items-center justify-center p-5"
      >
        <Input name="q" placeholder="Search" className="bg-white" />
        <Button
          type="submit"
          variant="contained"
          className="flex items-center gap-2 ml-2"
        >
          <Search size={20} />
          Search
        </Button>
      </form>
    </Box>
  );
}
