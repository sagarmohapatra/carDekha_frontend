import React from 'react'
import { Box, Fade, Menu, MenuItem, Button,Divider } from '@mui/material'
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const WrapperButton = styled(Button)({
    textTransform: "none",
    color: "black",
    textDecoration: "underline",

})

const Buttons = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <WrapperButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                English
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
                <Divider  />
                <MenuItem onClick={handleClose}>తెలుగు</MenuItem>
                <Divider  />
                <MenuItem onClick={handleClose}>বাংলা</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>मराठी</MenuItem>
            </Menu>
        </Box>
    )
}

export default Buttons