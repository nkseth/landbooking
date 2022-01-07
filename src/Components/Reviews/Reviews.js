import React from "react";
import { Avatar, Rating, Typography } from "@mui/material";
import "./Reviews.css";

const Reviews = ({ data }) => {
  return (
    <div
      className="reviews-container my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div
        className=" p-3"
        style={{ color: "#334E6F", borderBottom: "1px solid #eaeff5" }}
      >
        <Typography variant="h5">
          {data?.length > 0 ? data.length : 0} Reviews
        </Typography>
      </div>
      {data?.map((item, index) => {
        return (
          <div className="reviews-container " key={index}>
            <div className="review-container d-flex justify-content-start align-items-start">
              <div className="owner-img mx-1 mx-md-2">
                <Avatar className="owner-image">{item.postedBy.name[0]}</Avatar>
              </div>
              <div
                className="name-container  mx-2"
                style={{ color: "#334E6F" }}
              >
                <Typography variant="h6">{item.postedBy.name}</Typography>
                <Rating
                  name="half-rating"
                  readOnly
                  value={item.rating}
                  precision={0.5}
                />
                <Typography varient="caption" style={{ fontSize: "14px" }}>
                  {item.remark}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
