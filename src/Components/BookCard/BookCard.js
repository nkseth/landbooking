import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./BookCard.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const BookCard = ({ title, subTitle, amount, imageSrc }) => {
  return (
    <div className="card my-3 " style={{ border: "none" }}>
      <Card
        sx={{
          boxShadow: " 0px 0px 10px 1px rgb(71 85 95 / 8%)",
        }}
        className="card-container"
      >
        <div className="p-0 position-relative">
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "30vh", objectFit: "cover" }}
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
              bottom: "1rem",
              right: "1rem",
            }}
          >
            <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
          </div>
        </div>
        <CardContent sx={{ color: "#334E6F", padding: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subTitle}</Typography>
        </CardContent>

        <CardContent sx={{ color: "#334E6F", padding: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="mb-3"
          >
            Booking Summary
          </Typography>
          <div className="date-timing my-2">
            <Typography variant="body2" className="mb-2">
              Your Dates
            </Typography>
            <div className="p-2">
              <div className="d-flex justify-content-between mb-4 ">
                <Typography variant="body2">Appearing</Typography>
                <Typography variant="body2">12 OCT 2021</Typography>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Timing</Typography>
                <Typography variant="body2">12 PM,1PM</Typography>
              </div>
            </div>
          </div>
          <div className="stay-charges my-2">
            <Typography variant="body2" className="mb-2">
              Your Stay
            </Typography>
            <div className="p-2">
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Rent(1 Week)</Typography>
                <Typography variant="body2">$200.00</Typography>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Service charge</Typography>
                <Typography variant="body2">$10.00</Typography>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Total Cost</Typography>
                <Typography variant="body2">$210</Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCard;
