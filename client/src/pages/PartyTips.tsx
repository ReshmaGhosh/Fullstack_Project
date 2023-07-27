import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchPartyTips } from "../components/features/partyTips/PartyTipsSlice";
import PartyTipsCard from "../components/kulius/card/PartyTipsCard";
import NavBar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

import { Box, Grid } from "@mui/material";

function PartyTips() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartyTips());
  }, [dispatch]);

  const partyTips = useSelector(
    (state: RootState) => state.partyTips.partyTips
  );
  const status = useSelector((state: RootState) => state.partyTips.status);
  const error = useSelector((state: RootState) => state.partyTips.error);

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
        {partyTips.map((partyTips) => (
          <Grid item xs={12} sm={6} md={4} key={partyTips._id}>
            <PartyTipsCard
              _id={partyTips._id}
              title={partyTips.title}
              description={partyTips.description}
              method={partyTips.method}
              image={partyTips.image}
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
            Party Tips
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
            If it's a party, so be it! Here are themes and tips that will make
            your party something out of the ordinary. Which party do you want?
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

export default PartyTips;
