import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";

import { RootState, useAppDispatch } from "../../../redux/store";
import { fetchPlayingById, PlayingData } from "./PlayingSlice";
import Footer from "../../footer/Footer";
import Navbar from "../../header/Navbar";

function PlayingDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const playingData: PlayingData | undefined = useSelector(
    (state: RootState) => state.playing.playing[0]
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPlayingById(id));
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
          <Link color="inherit" to="/playing">
            Playing
          </Link>
          <Typography color="text.primary">Playing Detail</Typography>
        </Breadcrumbs>
      </Box>
      {playingData ? (
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6}>
            <img
              src={playingData.image}
              alt={playingData.title}
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
                  paddingBottom: "35px",
                }}
              >
                {playingData.title}
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
              <strong>Description :</strong> {playingData.description}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              align="justify"
              sx={{ fontSize: "1.2rem" }}
              paddingLeft={10}
              paddingRight={10}
            >
              <strong>Method :</strong> {playingData.method}
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

export default PlayingDetail;
