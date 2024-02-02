import React from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Divider } from '@mui/material'
import styled from '@emotion/styled'
import Search from './Search'
import Buttons from './Buttons'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuButton from './MenuButton'

const StyleHeader = styled(AppBar)({
    background: "#ffffff",
    height: "125px",
    // boxShadow: "none"
})
const LastButton = styled(Box)({
    display: "flex",
    cursor: "pointer",
    margin: "0 0 0 auto",
    "& >div": {
        marginRight: "20px"
    }
})

const LoginButton = styled(Box)({
    display: "flex",
    color: "black",
    // marginLeft: "175px",
    marginTop: "5px",


})
const UserWrapper = styled(Typography)({
    fontSize: "14px"
})
const Fevoright = styled(Box)({
    color: "#393c41",
    marginTop: "5px"
})
const Header = () => {
    const Fimg = "https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg"
    return (
        <StyleHeader>
            <Toolbar>
                <Box style={{ lineHeight: "0" }}>
                    <img src={Fimg} style={{ width: "175px", height: "175px" }} />
                </Box>
                <Box>
                    <Search />

                </Box>
                <LastButton>
                    <Buttons />
                    <Fevoright>
                        <FavoriteBorderIcon />

                    </Fevoright>
                    <LoginButton>
                        <PersonOutlineIcon style={{ fontSize: '30px', color: "#808284", marginTop: "-3px" }} />
                        <UserWrapper>
                            Login / Registration</UserWrapper>
                    </LoginButton>
                </LastButton>
            </Toolbar>

            <Divider style={{color:"black"}}/>
            <MenuButton />
        </StyleHeader>
    )
}

export default Header