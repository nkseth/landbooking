import React from "react";
import Slider from "../Slider/Slider";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import Testimonialbg from "../../assets/testimonial.png";
const Testimonials = () => {
  const TestimonialData = [
    {
      name: "Route Millance",
      desc: "Experience With YardCan was Simple The Workflow is Simple and Hassel Free. I Was Able to Make a Reservation In 3 Steps. And It Is User Friendly ",
      imgaesrc:
        "https://webdesign.riolabz.com/yardcan/html/assets/img/user-3.jpg",
      profession: "Web Designer",
    },
    {
      name: "Route Millance",
      desc: "Check The Listing And See The Pricing And If You Have Any Questions You Can Message Them Directly Via Message",
      imgaesrc:
        "https://webdesign.riolabz.com/yardcan/html/assets/img/user-3.jpg",
      profession: "Web Designer",
    },
    {
      name: "Route Millance",
      desc: "Once Finalized Make A Reservation For Suitable Data And Time And Go Ahead And Relax.",
      imgaesrc:
        "https://webdesign.riolabz.com/yardcan/html/assets/img/user-3.jpg",
      profession: "Web Designer",
    },
  ];
  return (
    <div
      className="testimonial-container my-5 p-lg-5 p-md-5 p-2"
      style={{
        backgroundImage: `url(${Testimonialbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="heading-container text-center p-1"
        style={{ color: "#334E6F" }}
      >
        <h1>
          What Say <span style={{ color: "#1EFFAC" }}> Our Customers</span>
        </h1>
        <p>Go Through The Amazing Experience Shared By Customers</p>
      </div>
      <Slider>
        {TestimonialData.map((item, index) => {
          return (
            <div
              className="step-card mx-lg-3 mx-md-1 mx-sm-0 my-3 w-100 d-flex justify-content-center"
              key={index}
            >
              <Card
                className="d-flex flex-column justify-content-center align-items-center"
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#ffffff00",
                }}
              >
                <CardContent className="d-flex justify-content-center">
                  <CardMedia
                    component="img"
                    image={item.imgaesrc}
                    alt="green iguana"
                    style={{
                      borderRadius: "50%",
                      height: "6rem",
                      width: "6rem",
                      border: "5px solid #EBEDF1",
                    }}
                  />
                </CardContent>
                <CardContent
                  className="text-center"
                  style={{ color: "#334E6F" }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography gutterBottom variant="caption" component="div">
                    {item.profession}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
