import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Grid, Typography, Stack } from '@mui/material'
import styled from '@emotion/styled'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel'

import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: "#f8714e"
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
      * The value of the component.
     */
    // value: PropTypes.any,
};

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const ButtonColor = styled(Button)({
    color: "#46484c",
    fontWeight: "600",
    height: "50px",
    width: "140px",

})





const Poster = () => {
    const [change, setchange] = useState("white")
    const [twice,settwice]=useState(true)

    const change1=()=>{
        
    }


    const posterData = [
        { url: "https://stimg.cardekho.com/pwa/img/Web-revv-new.jpeg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1705557825388/Tata-Punch-EV_CD-MasterHead-Desktop_1686x548px.jpg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1705557603321/01_2024-Hyundai-Creta_CD-MasterHead-Desktop_1686x548px.jpg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1689247984533/CarDekho---1628x548-(2).png" }
    ]

    const Image = styled("img")({
        width: "100%",
        height: "560px",
        backgroundSize: "cover"
    })

    const CardWrapper = styled(Card)({
        width: "340px"
    })
    const HeadWrite = styled(Typography)({
        fontSize: "30px",
        fontWeight: "700"
    })

    const GroupCss = styled(RadioGroup)({
        display: "flex",
        flexDirection: "row",
        marginTop: "20px"
    })
    return (
        <Box>
            <Box style={{ position: "relavive" }}>
                <Carousel
                    swipeable={false}
                    draggable={false}

                    responsive={responsive}

                    keyBoardControl={true}
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px'
                    containerClass='carousel-container'
                    arrows={false}

                    showDots={true}

                >
                    {
                        posterData.map((data) => (
                            <Image src={data.url} />
                        ))
                    }
                </Carousel>
            </Box>
            <Box style={{ position: "absolute", marginTop: "-510px", marginLeft: "90px" }}>
                <Grid container>
                    <Grid xs={4}>
                        <CardWrapper>
                            <CardContent >
                                <HeadWrite>Find your right car</HeadWrite>
                                <Stack spacing={2} direction="row" style={{ marginTop: "16px" }}>
                                    <ButtonColor variant="outlined" style={{ backgroundColor: change }} onClick={() => { change === "white" ? setchange("black") : setchange("white") }} >New Car</ButtonColor>
                                    <ButtonColor variant="outlined" style={{ backgroundColor: change }} onClick={() => { change === "white" ? setchange("black") : setchange("white") }}>Used Car</ButtonColor>
                                </Stack>
                                <Box >
                                    <GroupCss name="use-radio-group" defaultValue="first" >
                                        <MyFormControlLabel value="first" label="By Budget" control={<Radio />} />
                                        <MyFormControlLabel value="second" label="By Brand" control={<Radio />} />
                                    </GroupCss>
                                </Box>

                                <Box style={{ marginTop: "20px" }}>
                                    <Stack spacing={0} sx={{ width: 300 }}>
                                        <Autocomplete
                                            id="free-solo-demo"
                                            // freeSolo it use to remove the arrow sign
                                            options={top100Films.map((option) => option.title)}
                                            renderInput={(params) => <TextField {...params} label="Select Budget" />}
                                        />
                                        <Autocomplete
                                            // freeSolo
                                            id="free-solo-2-demo"
                                            disableClearable
                                            options={allVehicleType.map((option) => option.title)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="All VehicleTypes"
                                                    InputProps={{
                                                        ...params.InputProps,
                                                        type: 'search',
                                                    }}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Box>

                                <Box style={{ marginTop: "25px" }}>
                                    <Button variant="outlined"
                                        style={{
                                            color: "white",
                                            backgroundColor: "#f75d34",
                                            borderColor: "#f75d34",
                                            textTransform: "none",
                                            padding: "14px 119px",
                                            textAlign: "center",
                                            fontSize: "18px"
                                        }}>
                                        <a href='https://www.cardekho.com/filter/new-cars' style={{ textDecoration: "none", color: "white" }}>
                                            Search </a></Button>
                                </Box>
                                <Box style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    color: "#717376",
                                    fontWeight: "500",
                                    marginTop: "25px",
                                    fontSize: "20px",
                                    marginRight: "7px",
                                    cursor: "pointer",

                                }}>
                                    <a href='https://www.cardekho.com/filter/new-cars' style={{ textDecoration: "none", display: "flex", color: "#717376" }}>
                                        <Typography style={{ fontSize: "14px", color: "#717376" }}>Advanced Search</Typography>
                                        <ArrowForwardIcon />
                                    </a>

                                </Box>
                            </CardContent>
                        </CardWrapper>
                    </Grid>
                </Grid>
            </Box>


        </Box>
    )
}

const top100Films = [
    { title: "1-5 Lakh", year: 1994 },
    { title: '5-10 Lakh ', year: 1972 },
    { title: '10-15 Lakh', year: 1974 },
    { title: '15-20 Lakh', year: 2008 },
    { title: '20-25 Lakh', year: 1957 },
    { title: "25-30 Lakh", year: 1993 },
    { title: '30-35 Lakh', year: 1994 },
    {
        title: '35-40 Lakh',
        year: 2003,
    },
    { title: '40-45 Lakh', year: 1966 },
    { title: '45-50 Lakh', year: 1999 },
    {
        title: '50-55 Lakh',
        year: 2001,
    },
    {
        title: '55-60 Lakh',
        year: 1980,
    },
    { title: '60-65 Lakh', year: 1994 },
    { title: '65-70 Lakh', year: 2010 },
    {
        title: '70-75 Lakh',
        year: 2002,
    },
    { title: "75-80 Lakh", year: 1975 },
    { title: '80-85 Lakh', year: 1990 },
    { title: '85-90 Lakh', year: 1999 },
    { title: '90-95 Lakh', year: 1954 },
    {
        title: '95 Lakh- 1 Crore',
        year: 1977,
    },
    { title: 'Above 1 Crore', year: 2002 },


];
const allVehicleType = [
    { title: "Hatchback", year: 1994 },
    { title: 'Sedan ', year: 1972 },
    { title: 'SUV', year: 1974 },
    { title: 'MUV', year: 2008 },
    { title: 'Luxury', year: 1957 },
    { title: "Super Luxury", year: 1993 },
    { title: 'Convertable', year: 1994 },
    {
        title: 'Hybrid',
        year: 2003,
    },
    { title: 'Coupe', year: 1966 },
    { title: 'Pickup Truck', year: 1999 },
    {
        title: "Minivan",
        year: 2001,
    },
    {
        title: 'Wagnor',
        year: 1980,
    },


]

export default Poster