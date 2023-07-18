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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value as string);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <Typography variant="h4">
        <ToysIcon fontSize="large" />
        &nbsp; Fill Your Details!
      </Typography>

      <StyledForm component="form" onSubmit={handleSubmit}>
        <TextField
          required
          label="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{ fontSize: "1.2em", margin: "10px 0" }}
        />
        <TextField
          required
          label="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          style={{ fontSize: "1.2em", margin: "10px 0" }}
        />

        <TextField
          required
          label="Age"
          value={age}
          onChange={handleAgeChange}
          style={{ fontSize: "1.2em", margin: "10px 0" }}
        />
        <FormControl
          sx={{ fontSize: "1.2em", margin: "10px 0", width: "13%" }}
        >
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            value={gender}
            label="Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          label="Address"
          value={address}
          onChange={handleAddressChange}
          style={{ fontSize: "1.2em", margin: "10px 0" }}
        />
        <ColorfulButton type="submit">Submit</ColorfulButton>
      </StyledForm>
    </div>
  );
}

export default LogInDetail;
