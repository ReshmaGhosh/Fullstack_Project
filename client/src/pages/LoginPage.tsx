import React, { useState, ChangeEvent, FormEvent } from "react";

import { Breadcrumb } from "semantic-ui-react";
import NavBar from "../components/header/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ToysIcon from "@mui/icons-material/Toys";

const sections = [
  { key: "home", content: "Home", link: true },
  { key: "login", content: "Login", active: true },
];

const StyledBox = styled(Box)({
  background: "linear-gradient(to right, #FFA500, #FFEC8B)",
  color: "#000",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
  }

  return (
    <div>
      <NavBar />
      <Breadcrumb sections={sections} />
      <StyledBox
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          minWidth: "300px",
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
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          required
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          sx={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </StyledBox>
    </div>
  );
}

export default LoginPage;
