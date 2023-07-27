// import React from "react";
// import { Card, Image } from "semantic-ui-react";

// const GridExampleVerticalAlignment = () => (
//   <div
//     style={{
//       backgroundColor: "#8dc8f2",
//       paddingTop: "1rem",
//       marginTop: "10px",
//     }}
//   >
//     <h1
//       style={{
//         textAlign: "center",
//         paddingTop: "2rem",
//         fontSize: "2.3rem",
//         fontWeight: "bold",
//         fontFamily: "Comic Sans MS, cursive, sans-serif",
//       }}
//     >
//       Fun With Kulius
//     </h1>

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "flex-start",
//         gap: "1rem",
//         paddingTop: "3rem",
//         paddingLeft: "2rem",
//         paddingRight: "2rem",
//       }}
//     >
//       <div>
//         <Card
//           style={{
//             borderRadius: "25px",
//             boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
//           }}
//         >
//           <Image src="/images/Kulius.jpeg" />
//         </Card>
//         <Card
//           style={{
//             borderRadius: "25px",
//             boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
//           }}
//         >
//           <Image src="/images/Kulius-polis.jpeg" />
//         </Card>
//       </div>

//       <Card
//         fluid
//         style={{
//           width: "50%",
//           borderRadius: "25px",
//           boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         <Image src="/images/Gor-eget-slime.jpeg" />
//       </Card>

//       <div>
//         <Card
//           style={{
//             borderRadius: "25px",
//             boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
//           }}
//         >
//           <Image src="/images/Frostkalas.jpeg" />
//         </Card>
//         <Card
//           style={{
//             borderRadius: "25px",
//             boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
//           }}
//         >
//           <Image src="/images/Biokalas.jpeg" />
//         </Card>
//       </div>
//     </div>
//   </div>
// );

// export default GridExampleVerticalAlignment;

import React, { useEffect, useState } from "react";
import ColorItCard from "../kulius/card/ColorItCard";
import PartyTipsCard from "../kulius/card/PartyTipsCard";
import PlayingCard from "../kulius/card/PlayingCard";
import { Grid, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

interface CardData {
  _id: string;
  title: string;
  description: string;
  image: string;
  method: string;
}

const GridExampleVerticalAlignment = () => {
  const [colorItData, setColorItData] = useState<CardData[]>([]);
  const [partyTipsData, setPartyTipsData] = useState<CardData[]>([]);
  const [playingData, setPlayingData] = useState<CardData[]>([]);

  useEffect(() => {
    fetch("https://frontend-1w4w.onrender.com/colorit")
      .then((response) => response.json())
      .then((data) => setColorItData(data.slice(0, 2)));

    fetch("https://frontend-1w4w.onrender.com/partytips")
      .then((response) => response.json())
      .then((data) => setPartyTipsData(data.slice(0, 1)));

    fetch("https://frontend-1w4w.onrender.com/playing")
      .then((response) => response.json())
      .then((data) => setPlayingData(data.slice(0, 2)));
  }, []);

  return (
    <Grid
      container
      style={{ backgroundColor: "#8dc8f2", padding: "1rem", marginTop: "10px" }}
    >
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="h3"
          style={{
            paddingTop: "2.5rem",
            fontWeight: "bold",
            fontFamily: "Comic Sans MS, cursive, sans-serif",
          }}
        >
          Fun With Kulius
        </Typography>
      </Grid>

      <Grid item container spacing={2} style={{ paddingTop: "3rem" }}>
        <Grid item container xs={12} sm={3} direction="column">
          {colorItData.map((item) => (
            <Grid item>
              <ColorItCard key={item._id} {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12} sm={6}>
          {partyTipsData.map((item) => (
            <Grid item style={{ marginTop: "130px" }}>
              <PartyTipsCard key={item._id} {...item} />
            </Grid>
          ))}
        </Grid>

        <Grid item container xs={12} sm={3} direction="column">
          {playingData.map((item) => (
            <Grid item>
              <PlayingCard key={item._id} {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridExampleVerticalAlignment;
