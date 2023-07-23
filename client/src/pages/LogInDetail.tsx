import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import ToysIcon from "@mui/icons-material/Toys";
import { styled } from "@mui/system";
import { actions } from "../components/features/user/UserSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ColorfulButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#ffebee",
  padding: "40px",
  borderRadius: "10px",
});

function LogInDetail() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, firstName: event.target.value });
  }
  function setUserLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, lastName: event.target.value });
  }
  function setUserAddress(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, address: event.target.value });
  }
  function setUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, email: event.target.value });
  }

  function setUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, password: event.target.value });
  }

  const navigate = useNavigate();

  function onClickHandler() {
    const url = "http://localhost:8000/users/register";

    axios
      .post(url, userInfo)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/toy`);
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    setUserInfo({
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <Typography variant="h4">
        <ToysIcon fontSize="large" />
        &nbsp; Fill Your Details!
      </Typography>

      {/* <StyledForm component="form"> */}
      <TextField
        required
        label="First Name"
        value={userInfo.firstName}
        onChange={setUserFirstName}
        style={{ fontSize: "1.2em", margin: "10px 0" }}
      />
      <TextField
        required
        label="Last Name"
        value={userInfo.lastName}
        onChange={setUserLastName}
        style={{ fontSize: "1.2em", margin: "10px 0" }}
      />

      <TextField
        required
        label="Address"
        value={userInfo.address}
        onChange={setUserAddress}
        style={{ fontSize: "1.2em", margin: "10px 0" }}
      />
      <TextField
        required
        label="Email address"
        value={userInfo.email}
        onChange={setUserEmail}
        style={{ fontSize: "1.2em", margin: "10px 0" }}
      />
      <TextField
        required
        label="Password"
        value={userInfo.password}
        onChange={setUserPassword}
        style={{ fontSize: "1.2em", margin: "10px 0" }}
      />
      <button onClick={onClickHandler}>Submit</button>
      {/* </StyledForm> */}
    </div>
  );
}

export default LogInDetail;
