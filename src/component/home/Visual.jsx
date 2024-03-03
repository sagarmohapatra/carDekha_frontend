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

const Visual = () => {
  return <div></div>;
};

export default Visual;
