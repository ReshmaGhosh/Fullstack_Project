import React, { useEffect } from "react";
import NavBar from "../components/header/Navbar";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";


import ColorItCard from "../components/kulius/card/ColorItCard";
import PlayingCard from "../components/kulius/card/PlayingCard";
import PartyTipsCard from "../components/kulius/card/PartyTipsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor } from "../components/features/colorit/ColorItSlice";
import { fetchPlaying } from "../components/features/playing/PlayingSlice";
import { fetchPartyTips } from "../components/features/partyTips/PartyTipsSlice";
import { ColorData } from "../components/features/colorit/ColorItSlice";
import { PlayingData } from "../components/features/playing/PlayingSlice";
import { PartyTipsData } from "../components/features/partyTips/PartyTipsSlice";
import { RootState, useAppDispatch } from "../redux/store";


function FunWithKulius() {

  const dispatch = useAppDispatch();

  const colorData = useSelector((state: RootState) => state.colorIt.color);
  const playingData = useSelector((state: RootState) => state.playing.playing);
  const partyTipsData = useSelector((state: RootState) => state.partyTips.partyTips);
  const colorStatus = useSelector((state: RootState) => state.colorIt.status);
  const playingStatus = useSelector((state: RootState) => state.playing.status);
  const partyTipsStatus = useSelector((state: RootState) => state.partyTips.status);

  useEffect(() => {
    if (colorStatus === "idle") {
      dispatch(fetchColor());
    }
    if (playingStatus === "idle") {
      dispatch(fetchPlaying());
    }
    if (partyTipsStatus === "idle") {
      dispatch(fetchPartyTips());
    }
  }, [colorStatus, playingStatus, partyTipsStatus, dispatch]);

  return (
    <div>
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
            // display: "flex",
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

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <Button
          variant="outlined"
          component={Link}
          to="/colorit"
          sx={{
            fontSize: "17px",
            padding: "15px",
            borderRadius: "20px",
            border: "3px solid",
          }}
        >
          Color It
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/partytips"
          sx={{
            fontSize: "17px",
            padding: "15px",
            borderRadius: "20px",
            border: "3px solid",
          }}
        >
          Party Tips
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/playing"
          sx={{
            fontSize: "17px",
            padding: "15px",
            borderRadius: "20px",
            border: "3px solid",
          }}
        >
          Playing
        </Button>
      </div>

      <div
        style={{
          backgroundColor: "#8ed1fc",
          height: "100%",
          marginTop: "40px",
          padding: "20px",
        }}
      >
        <Grid container spacing={3}>
          {colorData.map((item: ColorData) => (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={4}
              style={{ width: "100%" }}
            >
              <Link to={`/colorit/${item._id}`}>
                <ColorItCard {...item} />
              </Link>
            </Grid>
          ))}
          {playingData.map((item: PlayingData) => (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={4}
              style={{ width: "100%" }}
            >
              <Link to={`/playing/${item._id}`}>
                <PlayingCard {...item} />
              </Link>
            </Grid>
          ))}
          {partyTipsData.map((item: PartyTipsData) => (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={4}
              style={{ width: "100%" }}
            >
              <Link to={`/partytips/${item._id}`}>
                <PartyTipsCard {...item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FunWithKulius;


