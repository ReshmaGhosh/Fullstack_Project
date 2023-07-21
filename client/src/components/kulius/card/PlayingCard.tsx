import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface PlayingCardProps {
  _id: string;
  title: string;
  description: string;
  image: string;
  method: string;
}

function PlayingCard({
  _id,
  title,
  description,
  image,
  method,
}: PlayingCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {method}
        </Typography>
      </CardContent>
    </Card>
  );;
}

export default PlayingCard;
