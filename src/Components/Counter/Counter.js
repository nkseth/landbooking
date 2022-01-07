import { Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
const Counter = ({ guestchange, state, name }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <Button
        className="d-flex justify-content-center align-items-center "
        style={{
          color: "#1EFFAC",
          backgroundColor: "#fff",
          borderRadius: "50%",
          fontSize: "1.5rem",
          width: "35px",
          height: "35px",
          border: "1px solid #eaeff5",
          boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
          marginRight: "10px",
        }}
        onClick={() => {
          guestchange("-", name);
        }}
      >
        <div>-</div>
      </Button>
      <Typography style={{ color: "#53616D", marginRight: "10px" }}>
        {name === "adults"
          ? state.adults
          : name === "children"
          ? state.children
          : state.infants}
      </Typography>
      <Button
        className="d-flex justify-content-center align-items-center "
        style={{
          color: "#1EFFAC",
          backgroundColor: "#fff",
          borderRadius: "50%",
          fontSize: "1.5rem",
          width: "35px",
          height: "35px",
          border: "1px solid #eaeff5",
          boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
        }}
        onClick={() => {
          guestchange("+", name);
        }}
      >
        <div>+</div>
      </Button>
    </div>
  );
};

export default Counter;
