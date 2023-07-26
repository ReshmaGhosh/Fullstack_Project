import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";
import { fetchColor } from "../components/features/colorit/ColorItSlice";
import { RootState, AppDispatch } from "../redux/store";
import ColorItCard from "../components/kulius/card/ColorItCard";
import NavBar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

function ColorIt() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColor());
  }, [dispatch]);

  const color = useSelector((state: RootState) => state.colorIt.color);
  const status = useSelector((state: RootState) => state.colorIt.status);
  const error = useSelector((state: RootState) => state.colorIt.error);

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
        {" "}
        {color.map((color) => (
          <Grid item xs={12} sm={6} md={4} key={color._id}>
            {" "}
            <ColorItCard
              _id={color._id}
              title={color.title}
              description={color.description}
              image={color.image}
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
            Color It
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
            Paint your own Kulius! Color with your favorite colors, or why not
            mix up new exciting colors to draw with. Just download, print and
            paint!
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

export default ColorIt;
