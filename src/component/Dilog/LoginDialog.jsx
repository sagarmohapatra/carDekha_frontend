import styled from "@emotion/styled";
import { Dialog, Box,Button,Typography,ListItem,Input,PaperProps } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
const Coponent = styled(Box)({
  width: "100%",
  maxWidth: "1000px !!important",
  height: "100vh",
});

const LoginWrraper = styled(Box)({
  marginTop: "60px",
});
const Sublogin = styled(Typography)({
  fontSize: "13px",
  lineHeight: "18px",
  color: "#8a8685",
  marginBottom: "16px",
  marginRight: "11px",
  marginTop: "-5px",
});

const StyledInput = styled("input")({
  border: "none", // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: 0, // remove the native input padding
  paddingTop: "1em",
  flex: 1,
  color: "neutral",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&::placeholder": {
    opacity: 0,
    transition: "0.1s ease-out",
  },
  "&:focus::placeholder": {
    opacity: 1,
  },
  "&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label":
    {
      top: "0.5rem",
      fontSize: "0.75rem",
    },
  "&:focus ~ label": {
    color: "var(--Input-focusedHighlight)",
  },
  "&:-webkit-autofill": {
    alignSelf: "stretch", // to fill the height of the root slot
  },
  "&:-webkit-autofill:not(* + &)": {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius:
      "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
  },
});

const StyledLabel = styled("label")(({ theme }) => ({
  position: "absolute",
  lineHeight: 1,
  top: "calc((var(--Input-minHeight) - 1em) / 2)",
  // color: theme.vars.palette.text.tertiary,
  fontSize: "15px",
  color: "#b4c3d5",
  // fontWeight: theme.vars.fontWeight.md,
  transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
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
  marginRight: "10px",
  variant:"outlined"
});

const TextControl = styled(Typography)({
  fontSize: "10px",
  marginTop: "20px",
  color: "#bdbebf",
  display: "flex",
  marginLeft: "33px",
});

const Condition = styled(Box)({
  textDecoration: "underline",
  cursor: "pointer",
  "& > a": {
    color: "#bdbebf",
  },
});

const Logo1 = styled(CottageOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo2 = styled(DirectionsCarOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo3 = styled(SellOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Logo4 = styled(CompareOutlinedIcon)({
  color: "#383a3f",
  width: "50px",
  height: "50px",
  marginTop: "-1px",
});

const Font = styled(Typography)({
  fontSize: "22px",
  color: "black",
  lineHeight: "27px",
  position: "relative",
});
const Wrapper = styled(Box)({
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-around",
});

const ItemHead = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
});

const FinalWrapper = styled(ListItem)({
  lineHeight: "16px",
  "& >a ": {
    textDecoration: "none",
    color: "#9da8af",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "sans-serif",
  },
});

const Wrraper = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});

const Experience = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
  marginLeft: "80px",
});
const PlayImage = styled(Box)({
  display: "flex",
  marginLeft: "80px",
});

const Logo = styled(Typography)({
  color: "black",
  fontSize: "12px",
  fontWeight: "bold",
  marginLeft: "80px",
  marginTop: "20px",
});
const LoginDialog = ({ show, setshow }) => {
  const close = () => {
    setshow(false);
  };
  return (
    <Dialog open={show} onClose={() => setshow(false)} PaperProps={{sx:{width:"100%",maxWidth:"720px !important"}}}>
      <Coponent>
        <CloseIcon
          style={{
            float: "right",
            marginTop: "12px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={close}
        />
        <Box>
          <div className="row">
            <div className="col-md-6">
              <img
                component="img"
                alt="green iguana"
                height="483"
            
                src="https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner.svg"
                style={{ borderRadius: "8px" }}
              />
            </div>
            <div className="col-md-6">
              <LoginWrraper>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: "500", marginRight: "110px" }}
                >
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
                      slotProps={{
                        input: { placeholder: "+91", type: "number" },
                      }}
                      sx={{
                        "--Input-minHeight": "56px",
                        "--Input-radius": "6px",
                        "-webkit-appearance": "none",
                      }}
                      style={{ width: "78%", marginLeft: "3px" }}
                    />
                  </Box>
                  <Box style={{ marginTop: "20px" }}>
                    {/* <button style={{padding:"15px"}} class="btn btn-info">Send OTP</button> */}
                    <ButtonStyle > Send OTP</ButtonStyle>
                  </Box>
                  <TextControl>
                    By continuing I agree with the&nbsp;
                    <Condition type="span">
                      <a
                        href="https://www.cardekho.com/info/privacy_policy"
                        target="_blank"
                      >
                        {" "}
                        Privacy Policy,Terms & Conditions
                      </a>
                    </Condition>
                  </TextControl>
                </Box>
              </LoginWrraper>
            </div>
          </div>
        </Box>
      </Coponent>
    </Dialog>
  );
};

export default LoginDialog;
