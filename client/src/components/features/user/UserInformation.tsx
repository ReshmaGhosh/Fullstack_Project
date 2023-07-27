import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { actions } from "./UserSlice";

export default function UserInformation() {
  const dispatch = useDispatch();

  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  const [formData, setFormData] = useState({
    firstName: userDetail?.firstName,
    lastName: userDetail?.lastName,
    dob: userDetail?.dob,
    address: userDetail?.address,
    phone: userDetail?.phone,
    state: userDetail?.state,
    country: userDetail?.country,
  });

  const [readOnly, setReadOnly] = useState(true);

  function setUserFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, firstName: event.target.value });
  }

  function setUserLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, lastName: event.target.value });
  }

  function setUserDOB(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, dob: event.target.value });
  }

  function setUserAddress(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, address: event.target.value });
  }

  function setUserPhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, phone: event.target.value });
  }

  function setUserState(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, state: event.target.value });
  }

  function setUserCountry(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, country: event.target.value });
  }

  function onEditHandler() {
    setReadOnly(false);
  }

  function onSubmitHandler() {
    const token = localStorage.getItem("userToken");
    const url = `https://frontend-1w4w.onrender.com/users/${userDetail?._id}`;

    axios
      .put(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res, "new data");
        dispatch(actions.setUserData(res.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in to change your information");
          return;
        }
      });
    setReadOnly(true);
  }

  if (!userDetail) {
    return <div> No data...</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightpink",
        p: 3,
        borderRadius: 2,
        width: "50%",
        margin: "auto",
      }}
    >
      <h1>User Information</h1>

      <TextField
        id="standard-firstName"
        label="First Name"
        variant="standard"
        value={formData.firstName}
        onChange={setUserFirstName}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />

      <TextField
        id="standard-lastName"
        label="Last Name"
        variant="standard"
        value={formData.lastName}
        onChange={setUserLastName}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />
      <TextField
        id="standard-dob"
        label="Date of Birth"
        variant="standard"
        value={formData.dob}
        onChange={setUserDOB}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />
      <TextField
        id="standard-address"
        label="Address"
        variant="standard"
        value={formData.address}
        onChange={setUserAddress}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />
      <TextField
        id="standard-phoneNumber"
        label="Phone Number"
        variant="standard"
        value={formData.phone}
        onChange={setUserPhoneNumber}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />
      <TextField
        id="standard-state"
        label="State"
        variant="standard"
        value={formData.state}
        onChange={setUserState}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />

      <TextField
        id="standard-country"
        label="Country"
        variant="standard"
        value={formData.country}
        onChange={setUserCountry}
        InputProps={{
          readOnly: readOnly,
        }}
        sx={{ mb: 2, width: "50%" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={onEditHandler}
          sx={{ mr: 2 }}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={onSubmitHandler}
          sx={{ mr: 2 }}
        >
          Submit
        </Button>

        <Link to="/order">
          <Button variant="contained" color="inherit">
            Orders
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
