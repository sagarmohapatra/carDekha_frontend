import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  CardMedia,
  Button,
} from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { firstImg, secondImg } from "../constant/constant";


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

const Head = styled(Typography)({
  marginBottom: "8px",
  fontSize: "23px",
  color: "black",
  fontWeight: "500",
});
const Name = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  padding: "0 33px 0 0",
});

const Rupe = styled(CurrencyRupeeIcon)({
  fontSize: "14px",
  marginTop: "1px",
});
const Banner = () => {
  return (
    <React.Fragment>
      <Container maxWidth style={{ width: "101%", marginTop: "80px" }}>
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
            <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
              <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
              >
                {secondImg.map((data) => (
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
                {firstImg.map((data) => (
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
      </Container>
    </React.Fragment>
  );
};

export default Banner;
