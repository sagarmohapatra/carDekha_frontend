import React from "react";
import {
  Card,
  
  Typography,
  Box,
 
  CardMedia,
  Button,
} from "@mui/material";


import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  fifthImg,
  
} from "../constant/constant";

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

const BannerFifth = () => {
  return (
    <div>
      <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
        <Carousel responsive={responsive} swipeable={false} draggable={false}>
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
    </div>
  );
};

export default BannerFifth;
