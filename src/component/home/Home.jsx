import React from "react";
import { Box } from "@mui/material";
import Poster from "./Poster";
import Banner from "./Banner";
const Home = () => {
  return (
    <Box style={{ marginTop: "121px" }}>
      <Poster />
      {/* <Box style={{marginRight:"50px"}}> */}
        <Banner />
        </Box>
    // </Box>
  );
};

export default Home;
