import React from 'react'
import { Box, Button, Card, CardContent, Grid, Typography, Stack } from '@mui/material'
import styled from '@emotion/styled'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel'

import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';



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



    const posterData = [
        { url: "https://stimg.cardekho.com/pwa/img/Web-revv-new.jpeg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1705557825388/Tata-Punch-EV_CD-MasterHead-Desktop_1686x548px.jpg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1705557603321/01_2024-Hyundai-Creta_CD-MasterHead-Desktop_1686x548px.jpg" },
        { url: "https://stimg.cardekho.com/images/uploadimages/1689247984533/CarDekho---1628x548-(2).png" }
    ]

    const Image = styled("img")({
        width: "100%",
        height: "540px",
        backgroundSize: "cover"
    })

    const CardWrapper = styled(Card)({

    })
    const HeadWrite = styled(Typography)({
        fontSize: "30px",
        fontWeight: "700"
    })
    return (
        <Box>
            <Box>
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
            <Box>
                <Grid container>
                    <Grid xs={4}>
                        <CardWrapper>
                            <CardContent>
                                <HeadWrite>Find your right car</HeadWrite>
                                <Stack spacing={2} direction="row" style={{ marginTop: "16px" }}>
                                    <ButtonColor variant="outlined">New Car</ButtonColor>
                                    <ButtonColor variant="outlined">Used Car</ButtonColor>
                                </Stack>
                                <Box>
                                    <RadioGroup name="use-radio-group" defaultValue="first" style={{display:"flex"}}>
                                        <MyFormControlLabel value="first" label="First" control={<Radio />} />
                                        <MyFormControlLabel value="second" label="Second" control={<Radio />} />
                                    </RadioGroup>
                                </Box>
                            </CardContent>
                        </CardWrapper>
                    </Grid>
                </Grid>
            </Box>


        </Box>
    )
}

export default Poster