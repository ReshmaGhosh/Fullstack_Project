import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../../redux/store";

import { fetchPartyTipsById, PartyTipsData } from "./PartyTipsSlice";
import Footer from "../../footer/Footer";
import Navbar from "../../header/Navbar";

function PartyTipsDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const partyTipsData: PartyTipsData | undefined = useSelector(
    (state: RootState) => state.partyTips.partyTips[0]
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPartyTipsById(id));
    } else {
    }
  }, [dispatch, id]);

  return (
    <Box sx={{ bgcolor: "#deb6d5" }}>
      <Navbar />
      <Box mt={4}>
        {" "}
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link color="inherit" to="/partytips">
            Party Tips
          </Link>
          <Typography color="text.primary">Party Tips Detail</Typography>
        </Breadcrumbs>
      </Box>
      {partyTipsData ? (
        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <img
              src={partyTipsData.image}
              alt={partyTipsData.title}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Comic Sans MS, cursive, sans-serif",
                  paddingBottom: "20px",
                }}
              >
                {partyTipsData.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              align="justify"
              sx={{ fontSize: "1.2rem" }}
              paddingLeft={10}
              paddingRight={10}
            >
              <strong>Description :</strong> {partyTipsData.description}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              align="justify"
              sx={{ fontSize: "1.2rem" }}
              paddingLeft={10}
              paddingRight={10}
            >
              <strong>This is how the party is fixed :</strong>{" "}
              {partyTipsData.method}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
      <Box mt={15}>
        <Footer />
      </Box>
    </Box>
  );
}

export default PartyTipsDetail;
