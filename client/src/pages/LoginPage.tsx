import React, { useState, FormEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../components/header/Navbar";
import {
  Box,
  Button,
  TextField,
  Typography,
  Breadcrumbs,
  Link,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import ToysIcon from "@mui/icons-material/Toys";
import axios from "axios";
import { actions } from "../components/features/user/UserSlice";
import Footer from "../components/footer/Footer";

const StyledBox = styled(Box)({
  background: "linear-gradient(to right, #FFA500, #FFEC8B)",
  color: "#000",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, email: event.target.value });
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, password: event.target.value });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickHandler(event: FormEvent) {
    event.preventDefault();

    const url = "https://backend-ege3.onrender.com/users/login";

    axios
      .post(url, userInfo)
      .then((response) => {
        if (response.status === 200) {
          dispatch(actions.setUserData(response.data.userData));

          const userToken = response.data.token;
          localStorage.setItem("userToken", userToken);
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setErrorMessage("Log in first if you are new user");
        }
        console.log(error);
      });
    // navigate("/login-detail");
  }
  return (
    <div>
      <NavBar />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" component={RouterLink} to="/">
          Home
        </Link>

        <Link color="inherit" component={RouterLink} to="/login-detail">
          Login
        </Link>
        <Link color="inherit" component={RouterLink} to="/user-info">
          User Update
        </Link>
      </Breadcrumbs>
      <StyledBox
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "50%",
          margin: "auto",
          padding: "2rem",
          marginTop: "2rem",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
        onSubmit={onClickHandler}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <ToysIcon fontSize="large" />
          &nbsp; ToyStore Sign In
        </Typography>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <TextField
          required
          label="Username"
          variant="outlined"
          value={userInfo.email}
          onChange={getUserEmail}
          sx={{ marginBottom: "1rem", width: "100%" }}
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          value={userInfo.password}
          onChange={getUserPassword}
          sx={{ marginBottom: "1rem", width: "100%" }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledBox>
      <Box mt={15}>
        <Footer />
      </Box>
    </div>
  );
}

export default LoginPage;
