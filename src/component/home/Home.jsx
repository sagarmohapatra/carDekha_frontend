import React from "react";
import { Box } from "@mui/material";
import Poster from "./Poster";
import Banner from "./Banner";
const Home = () => {
  return (
    <Box style={{ marginTop: "121px" }}>
      <Poster />

      <Banner />
    </Box>
  );
};

export default Home;
