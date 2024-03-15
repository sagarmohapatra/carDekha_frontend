import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
  ListItem,
  List,
} from "@mui/material";
import Autocomplete from "@mui/joy/Autocomplete";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { brand, place1 } from "../constant/constant";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
// import Gri from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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

const Line = styled(Typography)({
  display: "inline-block",
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "400",
  lineHeight: "24px",
  margin: "0 0 20px",
});
const News = styled(Typography)({
  marginBottom: "24px",
  marginTop: "20px",
  fontWeight: "500",
  color: "black",
  fontSize: "22px",
});

const ButtonStyle = styled(Button)({
  backgroundColor: "#bdbebf",
  color: "white",
  height: "50px",
  width: "79%",
  marginRight: "10px",
});

const TextControl = styled(Typography)({
  fontSize: "10px",
  marginTop: "20px",
  color: "#bdbebf",
  display: "flex",
  marginLeft: "33px",
});

const Condition = styled(Box)({
  textDecoration: "underline",
  cursor: "pointer",
  "& > a": {
    color: "#bdbebf",
  },
});

const Logo1 = styled(CottageOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo2 = styled(DirectionsCarOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo3 = styled(SellOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo4 = styled(CompareOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Font = styled(Typography)({
  fontSize: "22px",
  color: "black",
  lineHeight: "27px",
  position: "relative",
});
const Wrapper = styled(Box)({
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-around",
});

const ItemHead = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
});

const FinalWrapper = styled(ListItem)({
  lineHeight: "16px",
  "& >a ": {
    textDecoration: "none",
    color: "#9da8af",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "sans-serif",
  },
});

const Wrraper = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});

const Experience = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
  marginLeft: "80px",
});
const PlayImage = styled(Box)({
  display: "flex",
  marginLeft: "80px",
});

const Logo = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
  marginLeft: "80px",
  marginTop: "20px",
});
const GroupVanture = styled(Box)({
  marginLeft: "80px",
  display: "flex",
});

const GroupVantureSecond = styled(Box)({
  marginLeft: "80px",
  display: "flex",
  marginTop: "-10px",
});
const GroupVantureThird = styled(Box)({
  marginLeft: "80px",
  display: "flex",
  marginTop: "-10px",
});

const Sofware = styled(Typography)({
  color: "#9da8af",
  fontSize: "12px",
});
const Last = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0 20px 0",
});

const Social = styled(Box)({
  "& >a": {
    padding: "0 8px 0 8px",
    color: "black",
  },
});

const Trusted = () => {
  const Img1 = "https://stimg.cardekho.com/pwa/img/appstore.png";
  const Img2 = "https://stimg.cardekho.com/pwa/img/playstore.png";
  const Img3 = "https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg";
  const Img4 = "https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg";
  const Img5 = "https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg";
  const Img6 = "https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg";
  const Img7 = "https://stimg.cardekho.com/pwa/img/Revv_Logo.svg";
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
                <Box style={{ display: "flex" }}>
                  {place.map((data) => (
                    <Grid container>
                      <Grid xs={2}>
                        <Card key={data.id} style={{ width: "130px" }}>
                          <CardMedia
                            component="img"
                            style={{
                              height: "90px",
                              width: "90px",
                              marginLeft: "30px",
                              marginTop: "17px",
                            }}
                            src={data.url}
                            alt="Paella dish"
                          />
                          <p
                            style={{
                              marginTop: "2px",
                              fontSize: "13px",
                              lineHeight: "21px",
                              color: "#8ba4a6",
                              marginLeft: "34px",
                            }}
                          >
                            Used cars in
                          </p>
                          <Box
                            style={{
                              marginLeft: "28px",
                              marginTop: "-10px",
                              marginBottom: "25px",
                            }}
                          >
                            {data.name}
                          </Box>
                        </Card>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
                <Box style={{ display: "flex", marginTop: "20px" }}>
                  {place1.map((data) => (
                    <Grid container>
                      <Grid xs={2}>
                        <Card key={data.id} style={{ width: "130px" }}>
                          <CardMedia
                            component="img"
                            style={{
                              height: "90px",
                              width: "90px",
                              marginLeft: "30px",
                              marginTop: "17px",
                            }}
                            src={data.url}
                            alt="Paella dish"
                          />
                          <p
                            style={{
                              marginTop: "2px",
                              fontSize: "13px",
                              lineHeight: "21px",
                              color: "#8ba4a6",
                              marginLeft: "34px",
                            }}
                          >
                            Used cars in
                          </p>
                          <Box
                            style={{
                              marginLeft: "28px",
                              marginTop: "-10px",
                              marginBottom: "25px",
                            }}
                          >
                            {data.name}
                          </Box>
                        </Card>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Grid>
              <Grid xs={3}>
                <Line>
                  I am looking to buy a second <br /> hand car in
                </Line>

                <Autocomplete
                  placeholder="Enter Your city"
                  options={top100Films}
                  sx={{ width: 300 }}
                />
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
      <Box style={{ marginTop: "20px" }}>
        <Card>
          <Container>
            <News>News to help choose your car</News>
            <Grid container>
              <Grid xs={6}>
                <Card>
                  <Box style={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      style={{
                        height: "190px",
                        width: "250px",
                        // marginLeft: "30px",
                      }}
                      src="https://stimg2.cardekho.com/images/carNewsimages/userimages/32176/1710057623538/WaitingPeriod.jpg?tr=w-360"
                      alt="Paella dish"
                    />
                    <Box>
                      <a
                        href="https://www.cardekho.com/india-car-news/heres-how-long-it-will-take-to-get-a-subcompact-suv-home-this-march-32177.htm"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          // padding: "10px",
                        }}
                      >
                        <Box style={{ marginLeft: "20px" }}>
                          Here’s How Long It Will Take To Get A Subcompact SUV
                          Home Th...
                        </Box>
                      </a>
                      <p style={{ marginLeft: "20px", color: "#bdbebf" }}>
                        The Mahindra XUV300 is experiencing the highest demand
                        this month, whereas the Renault Kiger has the shortest
                      </p>
                      <Box style={{ display: "flex" }}>
                        <Box
                          style={{
                            background: "#efefef",
                            width: "36px",
                            height: "20px",
                            marginLeft: "20px",
                            borderRadious: "80px",
                            fontSize: "20px",
                          }}
                        >
                          S
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                          <Box
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.38",
                              marginBottom: "1px",
                            }}
                          >
                            Sagar
                          </Box>
                          <Box style={{ fontSize: "12px" }}>Mar 15, 2024</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>

                <Card style={{ marginTop: "30px" }}>
                  <Box style={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      style={{
                        height: "190px",
                        width: "250px",
                        // marginLeft: "30px",
                      }}
                      src="https://stimg2.cardekho.com/images/carNewsimages/userimages/32176/1710057623538/WaitingPeriod.jpg?tr=w-360"
                      alt="Paella dish"
                    />
                    <Box>
                      <a
                        href="https://www.cardekho.com/india-car-news/heres-how-long-it-will-take-to-get-a-subcompact-suv-home-this-march-32177.htm"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          // padding: "10px",
                        }}
                      >
                        <Box style={{ marginLeft: "20px" }}>
                          Here’s How Long It Will Take To Get A Subcompact SUV
                          Home Th...
                        </Box>
                      </a>
                      <p style={{ marginLeft: "20px", color: "#bdbebf" }}>
                        The Mahindra XUV300 is experiencing the highest demand
                        this month, whereas the Renault Kiger has the shortest
                      </p>
                      <Box style={{ display: "flex" }}>
                        <Box
                          style={{
                            background: "#efefef",
                            width: "36px",
                            height: "20px",
                            marginLeft: "20px",
                            borderRadious: "80px",
                            fontSize: "20px",
                          }}
                        >
                          S
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                          <Box
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.38",
                              marginBottom: "1px",
                            }}
                          >
                            Sagar
                          </Box>
                          <Box style={{ fontSize: "12px" }}>Mar 15, 2024</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card style={{ marginLeft: "20px" }}>
                  <Box style={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      style={{
                        height: "190px",
                        width: "250px",
                        // marginLeft: "30px",
                      }}
                      src="https://stimg2.cardekho.com/images/carNewsimages/userimages/32176/1710057623538/WaitingPeriod.jpg?tr=w-360"
                      alt="Paella dish"
                    />
                    <Box>
                      <a
                        href="https://www.cardekho.com/india-car-news/heres-how-long-it-will-take-to-get-a-subcompact-suv-home-this-march-32177.htm"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          // padding: "10px",
                        }}
                      >
                        <Box style={{ marginLeft: "20px" }}>
                          Here’s How Long It Will Take To Get A Subcompact SUV
                          Home Th...
                        </Box>
                      </a>
                      <p style={{ marginLeft: "20px", color: "#bdbebf" }}>
                        The Mahindra XUV300 is experiencing the highest demand
                        this month, whereas the Renault Kiger has the shortest
                      </p>
                      <Box style={{ display: "flex" }}>
                        <Box
                          style={{
                            background: "#efefef",
                            width: "36px",
                            height: "20px",
                            marginLeft: "20px",
                            borderRadious: "80px",
                            fontSize: "20px",
                          }}
                        >
                          S
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                          <Box
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.38",
                              marginBottom: "1px",
                            }}
                          >
                            Sagar
                          </Box>
                          <Box style={{ fontSize: "12px" }}>Mar 15, 2024</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>

                <Card
                  style={{
                    marginTop: "30px",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <Box style={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      style={{
                        height: "190px",
                        width: "250px",
                        // marginLeft: "30px",
                      }}
                      src="https://stimg2.cardekho.com/images/carNewsimages/userimages/32176/1710057623538/WaitingPeriod.jpg?tr=w-360"
                      alt="Paella dish"
                    />
                    <Box>
                      <a
                        href="https://www.cardekho.com/india-car-news/heres-how-long-it-will-take-to-get-a-subcompact-suv-home-this-march-32177.htm"
                        style={{
                          color: "black",
                          textDecoration: "none",
                          // padding: "10px",
                        }}
                      >
                        <Box style={{ marginLeft: "20px" }}>
                          Here’s How Long It Will Take To Get A Subcompact SUV
                          Home Th...
                        </Box>
                      </a>
                      <p style={{ marginLeft: "20px", color: "#bdbebf" }}>
                        The Mahindra XUV300 is experiencing the highest demand
                        this month, whereas the Renault Kiger has the shortest
                      </p>
                      <Box style={{ display: "flex" }}>
                        <Box
                          style={{
                            background: "#efefef",
                            width: "36px",
                            height: "20px",
                            marginLeft: "20px",
                            borderRadious: "80px",
                            fontSize: "20px",
                          }}
                        >
                          S
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                          <Box
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.38",
                              marginBottom: "1px",
                            }}
                          >
                            Sagar
                          </Box>
                          <Box style={{ fontSize: "12px" }}>Mar 15, 2024</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Card>
      </Box>

      <Box style={{ marginTop: "20px" }}>
        <Divider />
        <Wrapper>
          <Box style={{ display: "flex" }}>
            <Box>
              <Logo1 />
            </Box>
            <Box style={{ marginLeft: "10px" }}>
              <Font>India's #1</Font>
              <Typography
                style={{
                  color: "#abadaf",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontFamily: "Sans-Serif",
                  position: "absolute",
                }}
              >
                Largest Auto portal
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: "flex" }}>
            <Box>
              <Logo2 />
            </Box>
            <Box style={{ marginLeft: "10px" }}>
              <Font>Car Sold</Font>
              <Typography
                style={{
                  color: "#abadaf",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontFamily: "Sans-Serif",
                  position: "absolute",
                }}
              >
                Every 4 minute
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: "flex" }}>
            <Box>
              <Logo3 />
            </Box>
            <Box style={{ marginLeft: "10px" }}>
              <Font>Offers</Font>
              <Typography
                style={{
                  color: "#abadaf",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontFamily: "Sans-Serif",
                  position: "absolute",
                }}
              >
                Stay updated pay less
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex" }}>
            <Box>
              <Logo4 />
            </Box>
            <Box style={{ marginLeft: "10px" }}>
              <Font>Compare</Font>
              <Typography
                style={{
                  color: "#abadaf",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontFamily: "Sans-Serif",
                  position: "absolute",
                }}
              >
                Decode the right car
              </Typography>
            </Box>
          </Box>
        </Wrapper>
        <Divider style={{ marginTop: "40px" }} />

        <Box style={{ marginTop: "50px" }}>
          <Grid container>
            <Grid xs={8}>
              <Wrraper>
                <Box>
                  <List>
                    <ListItem>
                      <ItemHead>ABOUT CARDEKHA</ItemHead>
                    </ListItem>
                    <FinalWrapper>
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        About
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        Careers With Us
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        Terms & Conditions
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        Corporate Policies
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        Investors
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/info/about_us"
                        target="_blank"
                      >
                        FAQs
                      </a>{" "}
                    </FinalWrapper>
                  </List>
                </Box>
                <Box>
                  <List>
                    <ListItem>
                      {" "}
                      <ItemHead>CONNECT WITH US</ItemHead>{" "}
                    </ListItem>
                    <FinalWrapper>
                      {" "}
                      <a href="https://www.cardekho.com/feedback">
                        Feedback
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a href="https://www.cardekho.com/info/contact_us">
                        Contact Us
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a href="https://media.cardekho.com/">
                        Advertise with Us
                      </a>{" "}
                    </FinalWrapper>
                  </List>
                </Box>

                <Box>
                  <List>
                    <ListItem>
                      {" "}
                      <ItemHead>OTHERS</ItemHead>{" "}
                    </ListItem>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.insurancedekho.com/health-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Health Insurance
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.insurancedekho.com/life-insurance/term-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Term Insurance
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="ww.insurancedekho.com/life-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Life Insurance
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.crack-ed.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Crack-ED
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.rupyy.com/personal-loan?utm_source=cardekho&utm_medium=footer&utm_campaign=Ventures"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Personal loan
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://tyres.cardekho.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        TyreDekho
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/girnar-vision-fund"
                        target="_blank"
                        rel="noreferrer"
                      >
                        BatteryDekho
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/girnar-vision-fund"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Girnar Vision Fund
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/emergency-response"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Emergency Response
                      </a>{" "}
                    </FinalWrapper>
                    <FinalWrapper>
                      {" "}
                      <a
                        href="https://www.cardekho.com/automobile-industry-dashboard"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Car Sales Trends
                      </a>{" "}
                    </FinalWrapper>
                  </List>
                </Box>
              </Wrraper>
            </Grid>
            <Grid xs={3}>
              <Box>
                <List>
                  <ListItem>
                    {" "}
                    <Experience>EXPERIENCE CARDEKHO APP</Experience>{" "}
                  </ListItem>
                  <PlayImage>
                    <ListItem>
                      <a
                        href="https://apps.apple.com/us/app/cardekho/id903373747?referrer=click%3Dd561e499-d27d-45e4-997b-97c244c329de"
                        target="_blank"
                      >
                        <img src={Img1} />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.girnarsoft.cardekho&&referrer=utm_campaign%3DWebsite%252520Head%252520Tab%252520for%252520App%252520Download%252520%26utm_medium%3Dad-analytics%26utm_content%3D328a755e-ae73-4c1c-ad53-eb47d19f9666%26utm_source%3Dflurry&pli=1"
                        target="_blank"
                      >
                        <img src={Img2} />
                      </a>
                    </ListItem>
                  </PlayImage>
                  <ListItem>
                    {" "}
                    <Logo>CARDEKHO GROUP VENTURES</Logo>{" "}
                  </ListItem>
                  <GroupVanture>
                    <ListItem>
                      <a href="https://www.bikedekho.com" target="_blank">
                        <img src={Img3} />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://www.rupyy.com/?utm_source=cardekho&utm_medium=footer&utm_campaign=group_ventures"
                        target="_blank"
                      >
                        <img src={Img4} />
                      </a>
                    </ListItem>
                  </GroupVanture>

                  <GroupVantureSecond>
                    <ListItem>
                      <a href="https://www.zigwheels.com" target="_blank">
                        <img src={Img5} />
                      </a>
                    </ListItem>
                    <ListItem>
                      <a
                        href="https://www.insurancedekho.com/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer"
                        target="_blank"
                      >
                        <img src={Img6} />
                      </a>
                    </ListItem>
                  </GroupVantureSecond>
                  <GroupVantureThird>
                    <ListItem>
                      <a
                        href="https://www.revv.co.in/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer"
                        target="_blank"
                      >
                        <img src={Img7} />
                      </a>
                    </ListItem>
                  </GroupVantureThird>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Last>
          <Box>
            <Sofware>© 2024 Girnar Software Pvt. Ltd.</Sofware>
          </Box>
          <Box style={{ display: "flex" }}>
            <Box style={{ marginRight: "30px" }}>
              <Typography style={{ fontWeight: "bolder" }}>Connect:</Typography>
            </Box>
            <Social>
              <a href="https://www.facebook.com/CarDekho" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/CarDekho" target="_blank">
                {" "}
                <XIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCMSjsvDuobchFSw5U1SDaqg"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/cardekhoindia/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/cardekhogroup/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </Social>
          </Box>
        </Last>
      </Box>
    </div>
  );
};
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
];

export default Trusted;
