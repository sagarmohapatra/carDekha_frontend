import React, { useState } from "react";
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
import { fifthImg, newly, brand, compare } from "../constant/constant";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

import "react-multi-carousel/lib/styles.css";
import Brand from "./Brand";

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

const Vs = styled(Box)({
  color: "white",
  backgroundColor: "black",
  width: "37px",
  height: "37px",
  marginLeft: "5px",
  textAlign: "center",
  borderRadius: "20px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
  position: "relative",
  marginLeft: "170px",
  marginTop: "50px",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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

const Compare = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Card>
        <CardContent>
          <Head>Compare to buy the right car</Head>

          <Box style={{ marginTop: "25px", marginBottom: "20px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {compare.map((data) => (
                <Card
                  key={data.url1}
                  style={{
                    width: "375px",
                    marginBottom: "15px",
                    height: "290px",
                  }}
                >
                  <Box style={{ display: "flex", position: "absolute" }}>
                    <Box>
                      <CardMedia
                        component="img"
                        style={{ height: "140px", width: "187px" }}
                        src={data.url1}
                        alt="Paella dish"
                      />
                    </Box>
                    <Box>
                      <CardMedia
                        component="img"
                        style={{ height: "140px", width: "188px" }}
                        src={data.url2}
                        alt="Paella dish"
                      />
                    </Box>
                  </Box>
                  <Vs>vs</Vs>

                  <Box style={{ display: "flex" }}>
                    <Box style={{ marginTop: "60px", marginLeft: "5px" }}>
                      <Typography
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        {data.brand1}
                      </Typography>
                      <Typography
                        style={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {data.model1}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "17px",
                          display: "flex",
                          lineHeight: "24px",
                        }}
                      >
                        <span>
                          <Rupe />
                        </span>
                        {data.price1}
                      </Typography>
                    </Box>
                    <Box style={{ marginTop: "60px", marginLeft: "50px" }}>
                      <Typography
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        {data.brand2}
                      </Typography>
                      <Typography
                        style={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {data.model2}
                      </Typography>
                      <Typography
                        style={{
                          fontSize: "17px",
                          display: "flex",
                          lineHeight: "24px",
                        }}
                      >
                        <span>
                          <Rupe />
                        </span>
                        {data.price2}
                      </Typography>
                    </Box>
                  </Box>
                  <Box style={{ marginLeft: "15px" }}>
                    <Box>
                      <Button
                        variant="outlined"
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          marginTop: "15px",
                          borderColor: "#f75d34",
                          color: "#f75d34",
                          textTransform: "none",
                          width: "245px",
                          marginLeft: "40px",
                        }}
                      >
                        {data.compare}
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))}
              <Card
                style={{
                  width: "375px",
                  marginBottom: "15px",
                  height: "290px",
                }}
              >
                <Box
                  style={{
                    width: "72px",
                    height: "72px",
                    border: "1px dashed",
                    marginLeft: "65px",
                    marginTop: "60px",
                    borderRadius: "50%",
                    position: "relative",
                    cursor: "pointer",
                    cursor: "pointer",
                  }}
                >
                  <AddIcon
                    style={{
                      height: "50px",
                      fontSize: "40px",
                      color: "#b7b8b9",
                      position: "absolute",
                      marginLeft: "16px",
                      marginTop: "10px",
                    }}
                  />
                </Box>
                <Typography style={{ marginLeft: "70px" }}>Add Car</Typography>
                <Divider orientation="vertical" flexItem/>
              </Card>
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
    </div>
  );
};

export default Compare;
