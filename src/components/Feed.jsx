import Box from "@mui/material/Box";
import Post from "./Post";

const Feed = () => {
  return (
    <Box width={1} flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
