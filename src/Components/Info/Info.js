import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Typography, Rating } from "@mui/material";
const Info = () => {
  return (
    <div>
      <div
        className="info-container p-2 my-4"
        style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
      >
        <div className="heading-container p-3" style={{ color: "#334E6F" }}>
          <div className="d-flex align-items-center">
            <h3>
              <b>Yardcan in Newyork</b>{" "}
            </h3>
            <div
              className="d-flex justify-content-center align-items-center mx-3"
              style={{
                color: "#1EFFAC",
                border: "1px solid #1EFFAC",
                borderRadius: "2rem",
                padding: "0.2rem 1rem",
              }}
            >
              Yard
            </div>
          </div>
          <div>
            <LocationOnOutlinedIcon style={{ fontSize: "18px" }} />
            <Typography variant="subtitle2 " style={{ fontSize: "14px" }}>
              {" "}
              2726 Shinn Street, New York
            </Typography>
          </div>
        </div>
        <div
          className="overview p-3 d-flex align-items-center"
          style={{ color: "#334E6F", fontSize: "14px" }}
        >
          <div>
            <Rating name="half-rating" defaultValue={3} precision={1} />
          </div>
          <div className="mx-3">
            <Typography>47 Reviews</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
