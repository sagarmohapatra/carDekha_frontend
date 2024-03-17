import styled from "@emotion/styled";
import { Dialog, Box, Typography,TextField } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
const Component = styled(Box)({
  height: "40vh",
  width:"100vh"
});
const LocationDialog = ({ show, setshow }) => {
  const handleclose = () => {
    setshow(false);
  };
const close=()=>{
  setshow(false)
}
const Head=styled(Typography)({
textAlign:"center",
marginTop:"40px",
fontSize:"16px"
})
  return (
    <Dialog open={show} onClose={() => handleclose()}>
      <Component>
       <CloseIcon style={{float:"right",marginTop:"12px",marginRight:"10px",cursor:"pointer"}} onClick={close}/>
       <Head>We need your city to customize your experience</Head>
       <Box style={{textAlign:"center",marginTop:"30px",}}>
       <TextField
          id="outlined-number"
          label="Type your city e.g jaipur,New Delhi"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          style={{width:"400px",}}
        />
       </Box>
      </Component>
    </Dialog>
  );
};

export default LocationDialog;
