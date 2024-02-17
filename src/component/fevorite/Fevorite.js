import React from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider, Grid, ListItem, List } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/joy/Button';

import Input from '@mui/joy/Input';
// import Container from '@mui/material/Container';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
// import Gri from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LoginWrraper = styled(CardContent)({
    marginTop: "60px"
})
const Sublogin = styled(Typography)({
    fontSize: "13px",
    lineHeight: "18px",
    color: "#8a8685",
    marginBottom: "16px",
    marginRight: "11px",
    marginTop: "-5px"

})

const StyledInput = styled('input')({
    border: 'none', // remove the native input border
    minWidth: 0, // remove the native input width
    outline: 0, // remove the native input outline
    padding: 0, // remove the native input padding
    paddingTop: '1em',
    flex: 1,
    color: 'neutral',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textOverflow: 'ellipsis',
    '&::placeholder': {
        opacity: 0,
        transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus ~ label': {
        color: 'var(--Input-focusedHighlight)',
    },
    '&:-webkit-autofill': {
        alignSelf: 'stretch', // to fill the height of the root slot
    },
    '&:-webkit-autofill:not(* + &)': {
        marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
        paddingInlineStart: 'var(--Input-paddingInline)',
        borderTopLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
        borderBottomLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    },
});


const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Input-minHeight) - 1em) / 2)',
    // color: theme.vars.palette.text.tertiary,
    fontSize: "15px",
    color: "#b4c3d5",
    // fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
        <React.Fragment>
            <StyledInput {...props} ref={ref} id={id} />
            <StyledLabel htmlFor={id}>Enter Mobile Number</StyledLabel>
        </React.Fragment>
    );
});

const ButtonStyle = styled(Button)({
    backgroundColor: "#bdbebf",
    color: "white",
    height: "50px",
    width: "79%",
    marginRight: "10px"
})

const TextControl = styled(Typography)({
    fontSize: "10px",
    marginTop: "20px",
    color: "#bdbebf",
    display: "flex",
    marginLeft: "33px"
})

const Condition = styled(Box)({
    textDecoration: "underline",
    cursor: "pointer",
    "& > a": {
        color: "#bdbebf",
    }
})

const Logo1 = styled(CottageOutlinedIcon)({
    color: "#383a3f",
    width: "50px",
    height: "50px",
    marginTop: "-1px"
})

const Logo2 = styled(DirectionsCarOutlinedIcon)({
    color: "#383a3f",
    width: "50px",
    height: "50px",
    marginTop: "-1px"
})

const Logo3 = styled(SellOutlinedIcon)({
    color: "#383a3f",
    width: "50px",
    height: "50px",
    marginTop: "-1px"
})

const Logo4 = styled(CompareOutlinedIcon)({
    color: "#383a3f",
    width: "50px",
    height: "50px",
    marginTop: "-1px"
})

const Font = styled(Typography)({
    fontSize: "22px",
    color: "black",
    lineHeight: "27px",
    position: "relative"
})
const Wrapper = styled(Box)({
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-around"
})

const ItemHead = styled(Typography)({
    color: "black",
    fontSize: "12px",
    fontWeight: "bold",

})

const FinalWrapper = styled(ListItem)({
    lineHeight: "16px",
    "& >a ": {
        textDecoration: "none",
        color: "#9da8af",
        fontSize: "12px",
        cursor: "pointer",
        fontFamily: "sans-serif",

    }
})

const Wrraper = styled(Box)({
    display: "flex",
    justifyContent: "space-around"
})

const Experience = styled(Typography)({
    color: "black",
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "80px"

})
const PlayImage = styled(Box)({
    display: "flex",
    marginLeft: "80px"
})

const Logo = styled(Typography)({
    color: "black",
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "80px",
    marginTop: "20px"

})
const GroupVanture = styled(Box)({
    marginLeft: "80px",
    display: "flex"

})

const GroupVantureSecond = styled(Box)({
    marginLeft: "80px",
    display: "flex",
    marginTop: "-10px"

})
const GroupVantureThird = styled(Box)({
    marginLeft: "80px",
    display: "flex",
    marginTop: "-10px"

})

const Sofware = styled(Typography)({
    color: "#9da8af",
    fontSize: "12px",
})
const Last = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding:"20px 0 20px 0"
})

const Social=styled(Box)({
"& >a":{
    padding:"0 8px 0 8px",
    color:'black'
}
})








const Fevorite = () => {
    const Img1 = "https://stimg.cardekho.com/pwa/img/appstore.png"
    const Img2 = "https://stimg.cardekho.com/pwa/img/playstore.png"
    const Img3 = "https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg"
    const Img4 = "https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg"
    const Img5 = "https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg"
    const Img6 = "https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg"
    const Img7 = "https://stimg.cardekho.com/pwa/img/Revv_Logo.svg"
    return (
        <Box>
            <Card sx={{ maxWidth: 700, marginTop: 23, boxShadow: 2, marginLeft: 35, minHeight: 455, paddingLeft: 1, paddingTop: 1 }}>
                <div className='row'>
                    <div className='col-md-5'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="450"
                            image="https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner.svg"
                            style={{ borderRadius: "8px" }}

                        />

                    </div>
                    <div className='col-md-7'>
                        <LoginWrraper >
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "500", marginRight: "110px" }}>
                                Login or Register
                            </Typography>
                            <Sublogin>
                                for Better Experience, Order tracking & Regular <br />
                                <span style={{ marginRight: "230px" }}> updates</span>
                            </Sublogin>
                            <Box>
                                <Box>
                                    <Input

                                        slots={{ input: InnerInput }}
                                        slotProps={{ input: { placeholder: '+91', type: 'number', } }}
                                        sx={{
                                            '--Input-minHeight': '56px',
                                            '--Input-radius': '6px',
                                            '-webkit-appearance': 'none',
                                        }}
                                        style={{ width: "78%", marginLeft: "35px" }}
                                    />
                                </Box>
                                <Box style={{ marginTop: "20px" }}>
                                    {/* <button style={{padding:"15px"}} class="btn btn-info">Send OTP</button> */}
                                    <ButtonStyle   >Send OTP</ButtonStyle>
                                </Box>
                                <TextControl>By continuing I agree with the&nbsp;<Condition type="span"><a href="https://www.cardekho.com/info/privacy_policy" target='_blank'> Privacy Policy,Terms & Conditions</a></Condition></TextControl>
                            </Box>


                        </LoginWrraper>


                    </div>


                </div>

            </Card>



            <Box style={{ marginTop: "20px" }}>
                <Divider />
                <Wrapper>
                    <Box style={{ display: "flex" }}>
                        <Box>
                            <Logo1 />
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                            <Font >India's #1</Font>
                            <Typography style={{ color: "#abadaf", fontSize: "15px", lineHeight: "22px", fontFamily: "Sans-Serif", position: "absolute" }}>Largest Auto portal</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex" }}>
                        <Box>
                            <Logo2 />
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                            <Font >Car Sold</Font>
                            <Typography style={{ color: "#abadaf", fontSize: "15px", lineHeight: "22px", fontFamily: "Sans-Serif", position: "absolute" }}>Every 4 minute</Typography>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex" }}>
                        <Box>
                            <Logo3 />
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                            <Font >Offers</Font>
                            <Typography style={{ color: "#abadaf", fontSize: "15px", lineHeight: "22px", fontFamily: "Sans-Serif", position: "absolute" }}>Stay updated pay less</Typography>
                        </Box>
                    </Box>

                    <Box style={{ display: "flex" }}>
                        <Box>
                            <Logo4 />
                        </Box>
                        <Box style={{ marginLeft: "10px" }}>
                            <Font >Compare</Font>
                            <Typography style={{ color: "#abadaf", fontSize: "15px", lineHeight: "22px", fontFamily: "Sans-Serif", position: "absolute" }}>Decode the right car</Typography>
                        </Box>
                    </Box>

                </Wrapper>
                <Divider style={{ marginTop: "40px" }} />

                <Box style={{ marginTop: "50px" }}>
                    <Grid container >
                        <Grid xs={8}>
                            <Wrraper >
                                <Box>
                                    <List>
                                        <ListItem> <ItemHead>ABOUT CARDEKHA</ItemHead> </ListItem>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>About</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>Careers With Us</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>Terms & Conditions</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>Privacy Policy</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>Corporate Policies</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>Investors</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/about_us' target='_blank'>FAQs</a> </FinalWrapper>
                                    </List>
                                </Box>
                                <Box>
                                    <List>
                                        <ListItem> <ItemHead>CONNECT WITH US</ItemHead> </ListItem>
                                        <FinalWrapper> <a href='https://www.cardekho.com/feedback' >Feedback</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/info/contact_us' >Contact Us</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://media.cardekho.com/' >Advertise with Us</a> </FinalWrapper>

                                    </List>
                                </Box>

                                <Box>
                                    <List>
                                        <ListItem> <ItemHead>OTHERS</ItemHead> </ListItem>
                                        <FinalWrapper> <a href='https://www.insurancedekho.com/health-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header' target='_blank' rel="noreferrer">Health Insurance</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.insurancedekho.com/life-insurance/term-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header' target='_blank' rel="noreferrer">Term Insurance</a> </FinalWrapper>
                                        <FinalWrapper> <a href='ww.insurancedekho.com/life-insurance?utm_source=cardekho&utm_medium=internal&utm_campaign=Menu_Header' target='_blank' rel="noreferrer">Life Insurance</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.crack-ed.com/' target='_blank' rel="noreferrer">Crack-ED</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.rupyy.com/personal-loan?utm_source=cardekho&utm_medium=footer&utm_campaign=Ventures' target='_blank' rel="noreferrer">Personal loan</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://tyres.cardekho.com' target='_blank' rel="noreferrer">TyreDekho</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/girnar-vision-fund' target='_blank' rel="noreferrer">BatteryDekho</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/girnar-vision-fund' target='_blank' rel="noreferrer" >Girnar Vision Fund</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/emergency-response' target='_blank' rel="noreferrer">Emergency Response</a> </FinalWrapper>
                                        <FinalWrapper> <a href='https://www.cardekho.com/automobile-industry-dashboard' target='_blank' rel="noreferrer">Car Sales Trends</a> </FinalWrapper>

                                    </List>
                                </Box>
                            </Wrraper>
                        </Grid>
                        <Grid xs={3}>
                            <Box>
                                <List>
                                    <ListItem> <Experience>EXPERIENCE CARDEKHO APP</Experience> </ListItem>
                                    <PlayImage>
                                        <ListItem><a href='https://apps.apple.com/us/app/cardekho/id903373747?referrer=click%3Dd561e499-d27d-45e4-997b-97c244c329de' target='_blank'><img src={Img1} /></a></ListItem>
                                        <ListItem><a href='https://play.google.com/store/apps/details?id=com.girnarsoft.cardekho&&referrer=utm_campaign%3DWebsite%252520Head%252520Tab%252520for%252520App%252520Download%252520%26utm_medium%3Dad-analytics%26utm_content%3D328a755e-ae73-4c1c-ad53-eb47d19f9666%26utm_source%3Dflurry&pli=1' target='_blank'><img src={Img2} /></a></ListItem>
                                    </PlayImage>
                                    <ListItem> <Logo>CARDEKHO GROUP VENTURES</Logo> </ListItem>
                                    <GroupVanture >
                                        <ListItem><a href='https://www.bikedekho.com' target='_blank'><img src={Img3} /></a></ListItem>
                                        <ListItem><a href='https://www.rupyy.com/?utm_source=cardekho&utm_medium=footer&utm_campaign=group_ventures' target='_blank'><img src={Img4} /></a></ListItem>

                                    </GroupVanture>

                                    <GroupVantureSecond >
                                        <ListItem><a href='https://www.zigwheels.com' target='_blank'><img src={Img5} /></a></ListItem>
                                        <ListItem><a href='https://www.insurancedekho.com/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer' target='_blank'><img src={Img6} /></a></ListItem>
                                    </GroupVantureSecond>
                                    <GroupVantureThird>
                                        <ListItem><a href='https://www.revv.co.in/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer' target='_blank'><img src={Img7} /></a></ListItem>
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
                            <a href='https://www.facebook.com/CarDekho' target='_blank' ><FacebookIcon /></a>
                            <a href='https://twitter.com/CarDekho' target='_blank'> <XIcon /></a>
                            <a href='https://www.youtube.com/channel/UCMSjsvDuobchFSw5U1SDaqg' target='_blank'><YouTubeIcon /></a>
                            <a href='https://www.instagram.com/cardekhoindia/' target='_blank'><InstagramIcon /></a>
                            <a href='https://www.linkedin.com/company/cardekhogroup/' target='_blank'><LinkedInIcon /></a>

                        </Social>

                    </Box>
                </Last>
            </Box>



        </Box>
    )
}

export default Fevorite


