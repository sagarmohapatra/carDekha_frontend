import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

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
const Banner = () => {
  const firstImg = [
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg",
      name: "Mahindra Thar",
      price: "Rs13.59 - 17.35 Lakh*",
      offer: "Check February Offers",
    },
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg",
      name: "Hyundai Creta",
      price: "Rs8.15 - 15.60 Lakh*",
      offer: "Check February Offers",
    },
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg",
      name: "Mahindra Scrorpia",
      price: "Rs6.13 - 10.20 Lakh*",
      offer: "Check February Offers",
    },
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg",
      name: "Tata Nexon",
      price: "Rs8.34 - 14.14 Lakh*",
      offer: "Check February Offers",
    },
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg",
      name: "Tata Punch",
      price: "Rs11 - 20.15 Lakh*",
      offer: "Check February Offers",
    },
    {
      url: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg",
      name: "Maruti Brezza",
      price: "Rs11.25 - 17.20 Lakh*",
      offer: "Check February Offers",
    },
  ];
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
            <Box>
              <Grid container>
                {firstImg.map((data) => (
                  <Card>
                    <Grid xs={3}>

                    </Grid>
                  </Card>
                ))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Banner;
