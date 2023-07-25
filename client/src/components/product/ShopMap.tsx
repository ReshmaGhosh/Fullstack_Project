
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
            marginBottom: "14px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>

        {(addressLines || []).map((line, index) => (
          <div key={index}>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                marginTop: index === 0 ? "10px" : "5px",
                fontSize: 18,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {index === 0 ? "Address: " : ""}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                marginTop: index === 0 ? "10px" : "5px",
                fontSize: 18,
                textAlign: "left",
              }}
            >
              {line}
            </Typography>
          </div>
        ))}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            marginTop: "10px",
            fontSize: 18,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {"Telephone: "}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            marginTop: "10px",
            fontSize: 18,
            textAlign: "left",
          }}
        >
          {phoneNumber}
        </Typography>

        {(openingHours || []).map((line, index) => (
          <div key={index}>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                marginTop: index === 0 ? "10px" : "5px",
                fontSize: 18,
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              {index === 0 ? "Opening hours: " : ""}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{
                marginTop: index === 0 ? "10px" : "5px",
                fontSize: 18,
                textAlign: "left",
              }}
            >
              {line}
            </Typography>
          </div>
        ))}
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "25px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          onClick={() => {
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${city}`
            );
          }}
        >
         
          Learn More
        </Button>
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
