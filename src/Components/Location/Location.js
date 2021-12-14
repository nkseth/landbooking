import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Typography } from "@mui/material";

const Location = () => {
  return (
    <div
      className="location-container p-2 my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div className="heading-container " style={{ color: "#334E6F" }}>
        <div
          className="d-flex align-items-center p-2 mb-4"
          style={{ borderBottom: "1px solid #eaeff5" }}
        >
          <LocationOnOutlinedIcon style={{ fontSize: "24px" }} />
          <Typography varient="h3">
            <b>Location</b>{" "}
          </Typography>
        </div>
      </div>
      <div
        className=" d-flex flex-column align-items-start my-3"
        style={{ color: "#334E6F", fontSize: "14px" }}
      >
        <div className="my-2">
          <LocationOnOutlinedIcon style={{ fontSize: "18px" }} />
          <Typography variant="subtitle2 " style={{ fontSize: "14px" }}>
            {" "}
            171 Greenwich St QCH7
          </Typography>
        </div>
        <div className="mx-3">
          <Typography>
            <b> Share Listing</b>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Location;
