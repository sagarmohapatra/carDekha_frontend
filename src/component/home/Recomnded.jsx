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
import { fifthImg, newly, brand } from "../constant/constant";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
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

const Recomnded = () => {
  return (
    <div>
      <Box style={{ marginTop: "40px" }}>
        <Card>
          <CardContent>
            <Head>Recommended Used Cars For You</Head>

            <Box style={{ display: "flex", marginTop: "25px" }}>
              <Name>New</Name>

              <Name>Used</Name>
            </Box>

            <Box style={{ marginTop: "20px" }}>
              <Divider />
            </Box>

            <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
              <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
              >
                {fifthImg.map((data) => (
                  <Card key={data.id} style={{ width: "275px" }}>
                    <CardMedia
                      component="img"
                      style={{ height: "190px", width: "275px" }}
                      src={data.url}
                      alt="Paella dish"
                    />
                    <Box style={{ marginLeft: "15px" }}>
                      <Typography
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          marginTop: "15px",
                        }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        style={{ fontSize: "15px", marginTop: "3px" }}
                      >
                        <Rupe />
                        {data.price}
                      </Typography>
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
                            width: "240px",
                          }}
                        >
                          {data.offer}
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Carousel>
            </Box>

            <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
              <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
              >
                {fifthImg.map((data) => (
                  <Card key={data.id} style={{ width: "275px" }}>
                    <CardMedia
                      component="img"
                      style={{ height: "190px", width: "275px" }}
                      src={data.url}
                      alt="Paella dish"
                    />
                    <Box style={{ marginLeft: "15px" }}>
                      <Typography
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          marginTop: "15px",
                        }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        style={{ fontSize: "15px", marginTop: "3px" }}
                      >
                        <Rupe />
                        {data.price}
                      </Typography>
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
                            width: "240px",
                          }}
                        >
                          {data.offer}
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Carousel>
            </Box>
          </CardContent>
        </Card>
        {/* latest car */}
      </Box>

      {/* <Box style={{marginTop:"40px"}> */}

      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <Head>Upcoming Cars</Head>

          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url1}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
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
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button>
                    </Box>
                  </Box>
                </Card>
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
                View All Upcoming Cars
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      {/* upcoming cars */}

      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <Head>Latest Cars</Head>

          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
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
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button>
                    </Box>
                  </Box>
                </Card>
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
                View All Latest Cars
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      {/* electric car */}

      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <Head>Electric Cars</Head>

          <Box style={{ display: "flex", marginTop: "25px" }}>
            <Name>Popular</Name>

            <Name>Upcoming</Name>
            <Name>Latest</Name>
          </Box>

          <Box style={{ marginTop: "20px" }}>
            <Divider />
          </Box>

          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
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
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Carousel>
          </Box>
          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
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
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Carousel>
          </Box>
          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
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
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button>
                    </Box>
                  </Box>
                </Card>
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
                View All Electric Cars
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* newly launch */}

      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <News>Newly Launched! Car Services</News>

          <Box style={{ marginTop: "20px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {newly.map((data) => (
                <Box key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{
                      height: "160px",
                      width: "275px",
                      borderRadius: "12px",
                    }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "5px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
                    <Box>
                      <Box
                        style={{
                          fontSize: "14px",

                          //   lineHeight: "24px",
                          marginTop: "12px",
                          fontWeight: "600",
                          color: "#f75d34",
                          textTransform: "none",
                          display: "flex",
                        }}
                      >
                        {data.book}{" "}
                        <span style={{ marginTop: "-3px" }}>
                          {" "}
                          <ChevronRightRoundedIcon />
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </CardContent>
      </Card>

      {/* trusted */}

      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <Head>Trusted used cars by budget</Head>

          <Box style={{ display: "flex", marginTop: "25px" }}>
            <Name>CarDekho Used Cars</Name>

            <Name>1-5 LAKH</Name>
            <Name>5-10 LAKH</Name>
            <Name>10-15 LAKH</Name>
          </Box>

          <Box style={{ marginTop: "20px" }}>
            <Divider />
          </Box>

          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
                    <Box>
                      {/* <Button
                        variant="outlined"
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          marginTop: "15px",
                          borderColor: "#f75d34",
                          color: "#f75d34",
                          textTransform: "none",
                          width: "240px",
                        }}
                      >
                        {data.offer}
                      </Button> */}
                    </Box>
                  </Box>
                </Card>
              ))}
            </Carousel>
          </Box>
          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
                    <Box>
                      {/* <Button
                        variant="outlined"
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          lineHeight: "24px",
                          marginTop: "15px",
                          borderColor: "#f75d34",
                          color: "#f75d34",
                          textTransform: "none",
                          width: "240px",
                        }}
                      >
                        {/* {data.offer} */}
                      {/* </Button> */}
                    </Box>
                  </Box>
                </Card>
              ))}
            </Carousel>
          </Box>
          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
            >
              {fifthImg.map((data) => (
                <Card key={data.id} style={{ width: "275px" }}>
                  <CardMedia
                    component="img"
                    style={{ height: "190px", width: "275px" }}
                    src={data.url}
                    alt="Paella dish"
                  />
                  <Box style={{ marginLeft: "15px" }}>
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        marginTop: "15px",
                      }}
                    >
                      {data.name}
                    </Typography>
                    <Typography style={{ fontSize: "15px", marginTop: "3px" }}>
                      <Rupe />
                      {data.price}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Carousel>
          </Box>
        </CardContent>
      </Card>

      <Brand />
    </div>
  );
};

export default Recomnded;
