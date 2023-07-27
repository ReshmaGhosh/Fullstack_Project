
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom"; 

interface PartyTipsCardProps {
  _id: string;
  title: string;
  description: string;
  image: string;
  method: string;
}

export default function PartyTips({
  _id,
  title,
  description,
  image,
  method,
}: PartyTipsCardProps) {
  return (
    <Card sx={{ height: "530px", borderRadius: "30px" }}>
      <CardActionArea>
        <CardMedia component="img" height="390" image={image} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="Comic Sans MS, cursive, sans-serif"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          color="primary"
          component={Link}
          to={`/partytips/${_id}`}
          sx={{
            borderRadius: "25px",
            fontSize: "1.2rem",
            backgroundColor: "#8ed1fc",
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}