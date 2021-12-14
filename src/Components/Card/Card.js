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
import "./Card.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Cards = ({ title, subTitle, amount, imageSrc }) => {
  return (
    <div className="card mx-lg-3 my-3 px-2" style={{ border: "none" }}>
      <Card
        sx={{
          boxShadow: " 0px 0px 10px 1px rgb(71 85 95 / 8%)",
        }}
        className="card-container"
      >
        <div className="p-0 position-relative">
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "25vh", objectFit: "cover" }}
            image={imageSrc}
            alt="green iguana"
          />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#1EFFAC",
              height: "3rem",
              width: "3rem",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-1.5rem",
              right: "1rem",
            }}
          >
            <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
          </div>
          <div
            className="d-flex justify-content-center align-items-bottom p-1"
            style={{
              backgroundColor: "#11111150",
              borderRadius: "2px",
              position: "absolute",
              bottom: "0.5rem",
              left: "0.5rem",
              color: "white",
              fontSize: "16px",
            }}
          >
            <Typography variant="caption">${amount}/hr</Typography>
          </div>
        </div>
        <CardContent sx={{ color: "#334E6F", padding: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subTitle}</Typography>
        </CardContent>
        <CardActions className="d-flex justify-content-between border-top p-1">
          <Rating name="half-rating" defaultValue={3} precision={1} />
          <Button size="small">
            <Link
              to="./view-detail"
              style={{ color: "#1EFFAC", textDecoration: "none" }}
            >
              View Details
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
