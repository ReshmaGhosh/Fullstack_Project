import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({
  city,
  name,
  addressLines,
  phoneNumber,
  openingHours,
}: {
  city: string;
  name: string;
  addressLines: string[];
  phoneNumber: string;
  openingHours: string[][];
}) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 30, fontWeight: "bold", textAlign: "left" }}
          color="text.secondary"
          gutterBottom
        >
          {city}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "black",
            marginTop: "30px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>

        {(addressLines || []).map((line, index) => (
          <Typography
            key={index}
            variant="body2"
            color="text.primary"
            sx={{
              marginTop: index === 0 ? "10px" : "5px",
              fontSize: 18,
              textAlign: "left",
            }}
          >
            {index === 0 ? "Address: " + line : line}
          </Typography>
        ))}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ marginTop: "10px", fontSize: 18, textAlign: "left" }}
        >
          {"Telephone: " + phoneNumber}
        </Typography>

        {(openingHours || []).map((line, index) => (
          <Typography
            key={index}
            variant="body2"
            color="text.primary"
            sx={{
              marginTop: index === 0 ? "10px" : "5px",
              fontSize: 18,
              textAlign: "left",
            }}
          >
            {index === 0 ? "Opening hours: " + line : line}
          </Typography>
        ))}
      </CardContent>
      <br />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          height: "500px",
          borderRadius: "25px",
          boxShadow: "-1px 3px 6px 0px rgba(0, 0, 0, 0.35)",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
