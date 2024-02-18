import React from 'react'
import { Box } from '@mui/material'
import { Stack, Autocomplete, TextField } from '@mui/material';
import styled from '@emotion/styled';
// import Autocomplete from '@mui/material';
// import TextField from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = styled(Box)({
    background: "#f7f7f7",
    width: "210%",
    marginLeft: "150px",
    display: "flex",

})
const InputAutocomplete = styled(Stack)({
    // paddingLeft: "60px",
    width: "100%",
    height: "40%",
    position: "relative"


})
const SearchWrraper = styled(Box)({
    background: "#24272c",
    position: "absolute",
    marginLeft: "428px",
    height:"56px",
    width:"60px",
    borderRadius:"0px 4px 4px 0px "

})
const Search = () => {
    return (
        <SearchContainer>
            <InputAutocomplete >
                <Autocomplete sx={{ height: 55 }}
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} placeholder="Serch Cars eg. Honda Elevate" />}
                />
            </InputAutocomplete>
            <SearchWrraper>
                <SearchIcon  style={{marginTop:"18px",fontSize:"25px",marginLeft:"15px"}}/>
            </SearchWrraper>
        </SearchContainer>
    )
}

const top100Films = [
    { title: 'All Popular Cars', year: 1994 },
    { title: 'Mahindra Thar', year: 1972 },
    { title: 'Hyundai Creta', year: 1974 },
    { title: 'Tata Punch', year: 2008 },
    { title: 'Tata Nexon', year: 1957 },
    { title: "Mahindra XUV700", year: 1993 },
    { title: 'Maruti Swift', year: 1994 },
    { title: 'Maruti Brezza', year: 1995 },
    { title: 'Toyota Fortuner', year: 1999 },
    { title: 'Maruti Ertiga', year: 1992 },
    { title: 'Maruti FRONX', year: 1997 }
]
export default Search