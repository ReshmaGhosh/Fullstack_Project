import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import PlayingCard from "../components/kulius/card/PlayingCard";
import { fetchPlaying } from "../components/features/playing/PlayingSlice";
import NavBar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

import { Box, Grid } from "@mui/material";

function Playing() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaying());
  }, [dispatch]);

  const playing = useSelector((state: RootState) => state.playing.playing);
  const status = useSelector((state: RootState) => state.playing.status);
  const error = useSelector((state: RootState) => state.playing.error);

  let content;
  if (status === "loading") {
    content = "Loading...";
  } else if (status === "succeeded") {
    content = (
      <Grid
        container
        spacing={2}
        sx={{ padding: "0 130px", paddingTop: "30px" }}
      >
        {playing.map((playing) => (
          <Grid item xs={12} sm={6} md={4} key={playing._id}>
            <PlayingCard
              _id={playing._id}
              title={playing.title}
              description={playing.description}
              method={playing.method}
              image={playing.image}
            />
          </Grid>
        ))}
      </Grid>
    );
  } else if (status === "failed") {
    content = `Error: ${error}`;
  }

  return (
    <Box sx={{ backgroundColor: "#FFF9C4" }}>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="/images/webb_kul.png"
          alt="Webb Kulius"
          width="900"
          height="400"
          style={{
            position: "relative",
            top: "-55px",
            zIndex: 1,
            marginRight: "10px",
          }}
        />
        <div
          style={{
            backgroundColor: "#8ed1fc",
            width: "715px",
            height: "400px",
            position: "relative",
            top: "-55px",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: "34px", paddingTop: "110px" }}>
            Playing
          </h1>
          <br />
          <p
            style={{
              color: "white",
              fontSize: "20px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            These games are a bit of Kuliu's specialty, and here there is
            someone for every occasion. Whether it's parent-free or time to have
            fun with the whole family. You just have to pick and choose - play -
            and then come back!
          </p>
        </div>
      </div>
      {content}

      <Box mt={15}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Playing;
