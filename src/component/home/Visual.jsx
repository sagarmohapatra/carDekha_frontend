import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { visual } from "../constant/constant";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import "react-multi-carousel/lib/styles.css";
import Brand from "./Brand";
import Compare from "./Compare";

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
const News = styled(Button)({
  fontSize: "18px",
  lineHeight: "16px",
  padding: "0 33px 0 0",
  color: "black",
  textTransform: "none",
  fontWeight: "600",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Rupe = styled(CurrencyRupeeIcon)({
  fontSize: "14px",
  marginTop: "1px",
});

const Visual = () => {
  return (
    <div>
      <Card style={{ marginTop: "20px" }}>
        <CardContent>
          <Head>Car Visual Stories</Head>

          <Box style={{ marginTop: "35px", marginBottom: "20px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {visual.map((data) => (
                <Box
                  key={data.id}
                  style={{
                    width: "220px",
                    height: "300px",
                    marginBottom: "20px",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    style={{
                      height: "330px",
                      width: "211px",
                      borderRadius: "15px",
                      marginBottom: "50px",
                    }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box
                    style={{
                      position: "absolute",
                      marginTop: "-110px",
                      color: "white",
                      // backgroundColor:"black",
                       width:"209px",
                       blur:"80%",
                      
                    }}
                  >
                    {data.name}
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>

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
                View all Car Visual Stories
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Compare/>
    </div>
  );
};

export default Visual;
