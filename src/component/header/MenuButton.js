import React from 'react'
import { Box, Fade, Menu, MenuItem, Button, Divider, styled } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const WrapperButton = styled(Button)({
    textTransform: "none",
    color: "black",


})
const WrapperButtonLast = styled(Button)({
    textTransform: "none",
    color: "#abadaf",


})
const MenuWrraper = styled(Box)({
    display: "flex",

})
const LastWrraper = styled(Box)({
    display: "flex",
    float: "right",
    color: "#c9cacb",
    marginLeft: "430px"

})
const MenuButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [anchorEls, setAnchorEls] = React.useState(null);
    const opens = Boolean(anchorEls);
    const handleClicks = (event) => {
        setAnchorEls(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEls(null);
    };

    const [scrap, setscrap] = React.useState(null);
    const openth = Boolean(scrap);
    const handleClickth = (event) => {
        setscrap(event.currentTarget);
    };
    const handleCloseth = () => {
        setscrap(null);
    };

    const [news, setnews] = React.useState(null);
    const opennews = Boolean(news);
    const handleClicknew = (event) => {
        setscrap(event.currentTarget);
    };
    const handleClosenew = () => {
        setnews(null);
    };

    const [challen,setchallen] = React.useState(null);
    const openchallen = Boolean(challen);
    const handleClickcha = (event) => {
        setchallen(event.currentTarget);
    };
    const handleClosecha = () => {
        setchallen(null);
    };
    return (
        <MenuWrraper>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={opens ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={opens ? 'true' : undefined}
                    onClick={handleClicks}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    NEW CARS
                </WrapperButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={opens}
                    onClose={handleCloses}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleCloses}>Explore New Cars</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Electric Cars</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Upcoming Cars</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>News Lunches</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Car Insurence</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Compare To Buy The Right Cars</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>New Car Offers & Discount</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Popular Brands</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Popular Cars</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloses}>Find cars dealer</MenuItem>
                </Menu>
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={openth ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openth ? 'true' : undefined}
                    onClick={handleClickth}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    BUY & SELL USED CARS
                </WrapperButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    scrap={scrap}
                    open={openth}
                    onClose={handleCloseth}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleCloseth}>Car in your city </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Sell car in your city</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Buy used car</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Sell car</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Used car valuation</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Used car loan</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Loan againt car</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseth}>Scrap my car</MenuItem>
                </Menu>
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={opennews ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={opennews ? 'true' : undefined}
                    onClick={handleClicknew}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    NEWS,REVIEWS & VIDEOS
                </WrapperButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={news}
                    open={opennews}
                    onClose={handleClosenew}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClosenew}>News & Top stories</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosenew}>Car Export reviews</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosenew}>Video reviews</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosenew}>Visual stories</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosenew}>User review</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosenew}>Car collection</MenuItem>
                </Menu>
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={openchallen ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openchallen ? 'true' : undefined}
                    onClick={handleClickcha}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    CAR SERVIES
                </WrapperButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={challen}
                    open={openchallen}
                    onClose={handleClosecha}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClosecha}>Challen check</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosecha}>Car service history</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosecha}>RTO Records Info</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClosecha}>SmartCar connected device</MenuItem>

                </Menu>
            </Box>
            <LastWrraper>
                <WrapperButtonLast
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    <LocationOnOutlinedIcon style={{ color: "#c9cacb" }} />
                    Location
                </WrapperButtonLast>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}>English</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>हिंदी</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>ಕೆನಡಾ</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>తెలుగు</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>বাংলা</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>मराठी</MenuItem>
                </Menu>
            </LastWrraper>
        </MenuWrraper>
    )
}

export default MenuButton