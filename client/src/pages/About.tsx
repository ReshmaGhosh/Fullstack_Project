import React from "react";
import NavBar from "../components/header/Navbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Footer from "../components/footer/Footer";

function About() {
  return (
    <Box sx={{ bgcolor: "#fffbde" }}>
      <NavBar />
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          paddingTop={12}
          paddingBottom={3}
        >
          About Fauget Toy Shop
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome to Fauget, a magical place for kids and grown-ups alike, where
          fantasy becomes reality. Fauget Toy Shop was founded in 2020 and has
          since made its mark as one of the most beloved toy shops around the
          world. At Fauget, we believe that play is a universal language. We
          strive to create a unique and engaging play experience, encouraging
          creativity, imagination, and learning in a fun and safe environment.
        </Typography>
        <Typography variant="h6" gutterBottom>
          From action figures and dolls to books, puzzles, games, and so much
          more, Fauget offers a wide range of toys for children of all ages.
          We're proud of our friendly and knowledgeable staff, who are always
          ready to help you find the perfect toy for every child, occasion, and
          budget.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Our mission is to provide our customers with high-quality, safe, and
          fun toys that help children learn, grow, and explore the world around
          them. We're committed to making a positive impact on the lives of
          children and families across the globe. Come and experience the Fauget
          magic today.
        </Typography>
      </Container>

      <Box mt={15}>
        <Footer />
      </Box>
    </Box>
  );
}

export default About;
