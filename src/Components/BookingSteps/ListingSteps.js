import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const BookingSteps = () => {
  const StepsData = [
    {
      icon: MapIcon,
      title: "List your Things",
      desc: "You Can List Your Things With An Hourly Price From Seller Dashboard",
    },
    {
      icon: BookmarkAddedIcon,
      title: "Accept Booking",
      desc: "Get Booking From The Vast Community And Approve!",
    },
    {
      icon: AttachMoneyIcon,
      title: "Get Paid",
      desc: "nce The Booking Is Completed. Your Payment Will Be Transferred To Your Corresponding Account Within Short Time!",
    },
  ];
  return (
    <div 
      className="bookind-steps-container  container"

    >
      <div
        className="heading-container text-center"
        style={{ color: "#334E6F" }}
      >
        <h1>
        List  <span style={{ color: "#1EFFAC" }}>Your Things In</span>
        </h1>
        <p>
        Earn Secondary Income With Us!
        </p>
      </div>
      <div className="cards-container d-flex justify-content-center align-items-top flex-wrap">
        {StepsData.map((item, index) => {
          return (
            <div className="step-card mx-lg-3 mx-md-1 mx-sm-0 my-5" key={index}>
              <Card
                className="d-flex flex-column justify-content-center align-items-center"
                sx={{
                  width: 350,
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
                <CardContent
                  className="text-center"
                  style={{ color: "#334E6F" }}
                >
                  <Typography gutterBottom variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
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
