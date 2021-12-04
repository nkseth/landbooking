import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
const Cards = ({ title, subTitle, desc, imageSrc }) => {
  return (
    <div className="card mx-lg-3 mx-md-1 mx-sm-0 my-3">
      <Card sx={{ width: 350 }}>
        <CardMedia
          component="img"
          height="200"
          image={imageSrc}
          alt="green iguana"
        />
        <CardContent sx={{ color: "#334E6F", padding: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subTitle}</Typography>
        </CardContent>
        <CardActions className="d-flex justify-content-between border-top p-1">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Button size="small" style={{ color: "#1EFFAC" }}>
            View Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
