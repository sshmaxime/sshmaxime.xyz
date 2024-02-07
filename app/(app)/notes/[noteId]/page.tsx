import Box from "@/components/system/box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
};

const Notes = () => {
  return (
    <Box className="prose lg:prose-lg">
      <h1>Notes</h1>

      <p>...</p>
    </Box>
  );
};

export default Notes;
