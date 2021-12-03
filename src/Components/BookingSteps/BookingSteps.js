import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BookingSteps = () => {
  const StepsData = [
    {
      icon: MapIcon,
      title: "Find Interesting Place",
      desc: "Check In Our Listing And Add The Listing That You Liked To Favourites",
    },
    {
      icon: MailOutlineIcon,
      title: "Contact a Few Owners",
      desc: "Check The Listing And See The Pricing And If You Have Any Questions You Can Message Them Directly Via Message",
    },
    {
      icon: PersonOutlineIcon,
      title: "Make a Reservation",
      desc: "Once Finalized Make A Reservation For Suitable Data And Time And Go Ahead And Relax.",
    },
  ];
  return (
    <div className="bookind-steps-container my-5">
      <div className="heading-container text-center">
        <h1>
          Plan Which In <span style={{ color: "#1EFFAC" }}>Your Mind</span>
        </h1>
        <p>
          Decide What You Want To Do, Whether To Go With Yard, Basketball Or
          Tennis Court
        </p>
      </div>
      <div className="cards-container d-flex justify-content-center align-items-top flex-wrap">
        {StepsData.map((item, index) => {
          return (
            <div className="step-card mx-lg-3 mx-md-1 mx-sm-0 my-3" key={index}>
              <Card
                className="d-flex flex-column justify-content-center align-items-center"
                sx={{
                  width: 400,
                  boxShadow: "none",
                }}
              >
                <CardContent
                  className="d-flex justify-content-center align-items-center"
                  sx={{
                    height: 100,
                    width: 100,
                    borderRadius: "50%",
                    backgroundColor: "#1EFFAC",
                  }}
                >
                  <item.icon
                    sx={{
                      color: "#fff",
                      fontSize: "3rem",
                    }}
                  />
                </CardContent>
                <CardContent className="text-center">
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingSteps;
