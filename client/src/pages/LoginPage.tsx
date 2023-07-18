import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import NavBar from "../components/header/Navbar";
import {
  Box,
  Button,
  TextField,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import ToysIcon from "@mui/icons-material/Toys";

const StyledBox = styled(Box)({
  background: "linear-gradient(to right, #FFA500, #FFEC8B)",
  color: "#000",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/home");
    navigate("/login-detail");
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
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <ToysIcon fontSize="large" />
          &nbsp; ToyStore Sign In
        </Typography>
        <TextField
          required
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          sx={{ marginBottom: "1rem", width: "100%" }}
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          sx={{ marginBottom: "1rem", width: "100%" }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledBox>
    </div>
  );
}

export default LoginPage;
