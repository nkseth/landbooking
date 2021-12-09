import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div
      className="Reservation-container p-3 py-4 my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div className="heading-container " style={{ color: "#334E6F" }}>
        <div
          className="d-flex align-items-center p-2 mb-4"
          style={{ borderBottom: "1px solid #eaeff5" }}
        >
          <CalendarTodayOutlinedIcon
            style={{ fontSize: "18px", marginRight: "5px" }}
          />
          <Typography varient="h3">
            <b>Book A Reservation</b>{" "}
          </Typography>
        </div>
      </div>
      <div
        className=" d-flex align-items-center "
        style={{ color: "#334E6F", fontSize: "14px" }}
      >
        <Form className="d-flex justify-content-center align-items-center flex-md-row flex-column">
          <Form.Control
            size="lg"
            type="date"
            className="m-2 w-90 p-3 form-input"
            id="form-input"
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder=""
            className="m-2 w-90 p-3 form-input"
            id="form-input"
          />
        </Form>
      </div>
      <div className="counter-container d-flex flex-md-row flex-column align-items-center justify-content-between my-4">
        <div className="counter1 d-flex flex-column align-items-start justify-content-center w-100 my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Adult
          </h6>
          <Counter />
        </div>
        <div className="counter2 d-flex flex-column align-items-start justify-content-center w-100 my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Children
          </h6>
          <Counter />
        </div>
      </div>
      <div className="button-container d-flex justify-content-center">
        <Link to="./book-now" className="w-100">
          <Button
            className="mx-1 w-100"
            style={{
              backgroundColor: "#1EFFAC",
              color: "white",
              border: "1px solid white",
              padding: "0.75rem 1.4rem",
              borderRadius: "3rem",
              boxShadow: "none",
            }}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
