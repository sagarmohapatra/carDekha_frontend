import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";

import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import "react-multi-carousel/lib/styles.css";

import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerForth from "./BannerForth";
import BannerThree from "./BannerThree";
import BannerFifth from "./BannerFifth";
import { Recommend } from "@mui/icons-material";
import Recomnded from "./Recomnded";

const Head = styled(Typography)({
  marginBottom: "8px",
  fontSize: "23px",
  color: "black",
  fontWeight: "500",
});
const Name = styled(Button)({
  fontSize: "16px",
  lineHeight: "16px",
  padding: "0 33px 0 0",
  color: "black",
  textTransform: "none",
});

const Banner = () => {
  const [show, setshow] = React.useState({
    firstImg: false,
    secondImg: false,
    thirdImg: false,
    forthImg: false,
    fifthImg: false,
  });

  return (
    <React.Fragment>
      <Container maxWidth style={{ width: "100%", marginTop: "80px" }}>
      <Box>
        <Card>
          <CardContent>
           
              <Head>The most searched cars</Head>

              <Box style={{ display: "flex", marginTop: "25px" }}>
                <Name>SUV</Name>

                <Name>Hatchback</Name>

                <Name>Sedan</Name>

                <Name>MUV</Name>

                <Name>Luxury</Name>
              </Box>

              <Box style={{ marginTop: "20px" }}>
                <Divider />
              </Box>

              <BannerOne />
              <BannerTwo />
              <BannerThree />
              <BannerForth />
              <BannerFifth />

              <Divider />
              <Box style={{ marginTop: "20px", marginLeft: "2px" }}>
                <Typography>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#2176ae",
                      fontSize: "14px",
                    }}
                    href="https://www.cardekho.com/best-suv"
                  >
                    View All SUV Cars
                  </a>
                </Typography>
              </Box>
           
          </CardContent>
        </Card>
        </Box>
        <Box>
          <Recomnded />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Banner;
