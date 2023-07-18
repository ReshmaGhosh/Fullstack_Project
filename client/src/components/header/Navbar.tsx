import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/product/ProductSlice";

const StyledAppBar = styled(AppBar)({
  borderBottomLeftRadius: "70px",
  borderBottomRightRadius: "00px",
  height: "150px",

  background: "linear-gradient(to right, #FFA500, #FFEC8B)",
});

function NavBar() {

      const dispatch = useDispatch();
        const handleSearchChange = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          dispatch(setSearchTerm(event.target.value));
        };

  return (
    <StyledAppBar position="sticky" style={{ zIndex: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/logo9.png"}
              alt="Logo"
              style={{ height: "130px", marginRight: "30px" }}
            />
          </div>
          <div>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ fontSize: "16px", color: "black", fontWeight: "bold" }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/toy"
              sx={{ fontSize: "16px", color: "black", fontWeight: "bold" }}
            >
              Toy
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/shop"
              sx={{ fontSize: "16px", color: "black", fontWeight: "bold" }}
            >
              Shop
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/funwithkulius"
              sx={{ fontSize: "16px", color: "black", fontWeight: "bold" }}
            >
              Fun with Kulius
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ fontSize: "16px", color: "black", fontWeight: "bold" }}
            >
              About
            </Button>
          </div>

          <div>
            <TextField
              id="filled-search"
              label="Hi, what are you looking for?"
              type="search"
              variant="filled"
              onChange={handleSearchChange}
              sx={{
                ml: 30,
                width: "250px",

                "& .MuiInputBase-root": {
                  borderRadius: 7,
                  backgroundColor: "white",
                },
                "& .MuiFilledInput-underline:before": {
                  display: "none",
                },
                "& .MuiFilledInput-underline:after": {
                  display: "none",
                },
              }}
            />
            <Button
              color="inherit"
              component={Link}
              to="/wishlist"
              sx={{
                ml: 6,
                fontSize: "18px",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#547df0",
                borderRadius: 7,
              }}
            >
              <IconButton
                sx={{
                  color: "white",
                  padding: "0",
                  marginRight: "5px",
                }}
              >
                <FavoriteIcon />
              </IconButton>
              Wishlist
            </Button>
            <IconButton
              color="inherit"
              component={Link}
              to="/user"
              sx={{
                ml: 2,
                color: "white",
              }}
            >
              <AccountCircleIcon style={{ fontSize: 50 }} />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default NavBar;
