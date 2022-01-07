import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Amenities = ({ data }) => {
  return (
    <div
      className="overview-container my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div
        className="heading-container p-3"
        style={{ color: "#334E6F", borderBottom: "1px solid #eaeff5" }}
      >
        <h5>Amenities</h5>
      </div>
      <div className="d-flex justify-content-start align-items-center flex-wrap">
        {data?.map((item, index) => {
          return (
            <div
              className="overview p-1 p-md-3 d-flex justify-content-center align-items-center mx-2 mx-md-4"
              style={{ color: "#334E6F", fontSize: "16px" }}
              key={index}
            >
              <Checkbox
                style={{ color: "#1EFFAC" }}
                {...label}
                checked={item.status === 1}
              />
              <Typography>{item.name}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
