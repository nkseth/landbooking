import { Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
const Counter = () => {
  return (
    <div className="d-flex justify-content-between align-items-center" >
      <Button
        className="d-flex justify-content-center align-items-center "
        style={{
          color: "#1EFFAC",
          backgroundColor: "#fff",
          borderRadius: "50%",
          fontSize: "2rem",
          width: "35px",
          height: "35px",
          border: "1px solid #eaeff5",
          boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
          marginRight: "20px",
        }}
      >
        <b>-</b>
      </Button>
      <Typography style={{ color: "#53616D", marginRight: "20px" }}>
        0
      </Typography>
      <Button
        className="d-flex justify-content-center align-items-center "
        style={{
          color: "#1EFFAC",
          backgroundColor: "#fff",
          borderRadius: "50%",
          fontSize: "2rem",
          width: "35px",
          height: "35px",
          border: "1px solid #eaeff5",
          boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
          
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
