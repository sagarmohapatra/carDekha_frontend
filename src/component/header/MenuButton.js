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
   marginLeft:"430px"

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
    return (
        <MenuWrraper>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
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
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    BUY & SELL USED CARS
                </WrapperButton>
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
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    NEWS,REVIEWS & VIDEOS
                </WrapperButton>
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
            </Box>
            <Box>
                <WrapperButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    CAR SERVIES
                </WrapperButton>
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