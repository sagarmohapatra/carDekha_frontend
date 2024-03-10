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
} from "@mui/material";
import Autocomplete from "@mui/joy/Autocomplete";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { brand, place1 } from "../constant/constant";
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
                          marginLeft: "20px",
                        }}
                      >
                        Here’s How Long It Will Take To Get A Subcompact SUV Home Th...
                      </a>
                      <p style={{ marginLeft: "20px",color:"#bdbebf" }}>
                        The Mahindra XUV300 is experiencing the highest demand
                        this month, whereas the Renault Kiger has the shortest
                      </p>
                      <Box>
                        
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Card>
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
