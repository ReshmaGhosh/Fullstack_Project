import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchColorById, ColorData } from "./ColorItSlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { Breadcrumbs, Button } from "@mui/material";
import { Box, Grid, Typography } from "@mui/material";
import NavBar from "../../header/Navbar";
import Footer from "../../footer/Footer";

function ColorItDetail() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const colorData: ColorData | undefined = useSelector(
    (state: RootState) => state.colorIt.color[0]
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchColorById(id));
    } else {
    }
  }, [dispatch, id]);

  return (
    <Box sx={{ bgcolor: "#deb6d5" }}>
      <NavBar />
      <Box mt={4}>
        {" "}
       
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link color="inherit" to="/colorit">
            Color It
          </Link>
          <Typography color="text.primary">ColorIt Detail</Typography>
        </Breadcrumbs>
      </Box>
      {colorData ? (
        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <img
              src={colorData.image}
              alt={colorData.title}
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Comic Sans MS, cursive, sans-serif",
                  paddingBottom: "20px",
                }}
              >
                {colorData.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              gutterBottom
              align="justify"
              sx={{ fontSize: "1.2rem" }}
            >
              <strong>Description :</strong> {colorData.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href={colorData.image}
              download
            >
              Download
            </Button>
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

export default ColorItDetail;
