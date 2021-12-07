import React from "react";
import { Rating, Typography } from "@mui/material";

const Reviews = () => {
  const ReviewData = [
    {
      image: "https://webdesign.riolabz.com/yardcan/html/assets/img/user-1.png",
      rating: 4,
      description:
        "The Ambience Was Superb And The Experience Was Good We Had A Great Time There",
      time: "2 weeks ago",
      name: "Cole Harris",
    },
    {
      image: "https://webdesign.riolabz.com/yardcan/html/assets/img/user-2.jpg",
      rating: 4,
      description:
        "The Ambience Was Superb And The Experience Was Good We Had A Great Time There",
      time: "2 weeks ago",
      name: "Cole Harris",
    },
    {
      image: "https://webdesign.riolabz.com/yardcan/html/assets/img/user-3.jpg",
      rating: 4,
      description:
        "The Ambience Was Superb And The Experience Was Good We Had A Great Time There",
      time: "2 weeks ago",
      name: "Cole Harris",
    },
  ];
  return (
    <div
      className="reviews-container my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div
        className=" p-3"
        style={{ color: "#334E6F", borderBottom: "1px solid #eaeff5" }}
      >
        <Typography variant="h5">24 Reviews</Typography>
      </div>
      {ReviewData.map((item, index) => {
        return (
          <div className="review-container " key={index}>
            <div
              className="owner-card-container d-flex justify-content-start align-items-start"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "2rem",
                borderBottom: "1px solid #eaeff5",
              }}
            >
              <div
                className="owner-img mx-2"
                style={{ width: "5rem", height: "5rem", borderRadius: "50%" }}
              >
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                className="name-container  mx-2"
                style={{ color: "#334E6F" }}
              >
                <Typography variant="h6">{item.name}</Typography>
                <Rating name="half-rating" defaultValue={3} precision={1} />
                <Typography varient="caption" style={{ fontSize: "14px" }}>
                  {item.description}
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
