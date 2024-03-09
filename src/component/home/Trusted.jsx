import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
} from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { brand } from "../constant/constant";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import "react-multi-carousel/lib/styles.css";
import Visual from "./Visual";
import { place } from "../constant/constant";
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

const Image = styled(CardMedia)({
  // height: "90px",
  // width: "90px",
  // marginLeft:"50px",
  // marginTop:"15px"
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%",
  marginTop: "15px",
});

const Trusted = () => {
  return (
    <div>
      <Card style={{ marginTop: "40px" }}>
        <CardContent>
          <Box style={{ display: "flex", marginTop: "25px" }}>
            <Name style={{ fontWeight: "600", fontSize: "18px" }}>
              Get trusted used cars nearby
            </Name>
          </Box>

          <Box style={{ marginTop: "35px", marginBottom: "30px" }}>
            <Grid container>
              <Grid xs={9}>
                
                    {place.map((data)=>(
                        <Card> 
                        {data.url}
                        {data.name}
                        </Card>
                    ))}
               
              </Grid>
            </Grid>
          </Box>

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
                View All Brands
              </a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trusted;
