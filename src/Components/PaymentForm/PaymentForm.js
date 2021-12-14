import React from "react";
import { Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";
import Accordian from "../Accordian/Accordian";

const PaymentForm = () => {
  return (
    <div 
      className="payment-method-container p-3 py-4 my-3"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",width: "100%",height: "100"}}
    >
      <div className="heading-container " style={{ color: "#334E6F" }}>
        <div
          className="d-flex align-items-center p-2 mb-4"
          style={{ borderBottom: "1px solid #eaeff5" }}
        >
          <CreditCardIcon
            style={{ fontSize: "28px", marginRight: "5px", color: "#1EFFAC" }}
          />
          <Typography variant="h6">Payment Methode</Typography>
        </div>
      </div>
      <div
        className=" d-flex align-items-center"
        style={{ color: "#334E6F", fontSize: "14px" }}
      >
        <Form className="d-flex justify-content-center align-items-center flex-column w-100 mb-3">
          <div className="w-100">
            <Accordian style={{ width: "100%" }} />
          </div>
        </Form>
      </div>

      <div className="button-container d-flex justify-content-center">
        <Link to="./Thankyou" className="w-100">
          <Button
            className="mx-1"
            style={{
              backgroundColor: "#1EFFAC",
              color: "white",
              border: "1px solid white",
              padding: "0.75rem 1.4rem",
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            CONFIRM NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentForm;
