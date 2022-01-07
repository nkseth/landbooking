import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Bannerbg from "../../assets/title-bg.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ThankYou = () => {
  return (
    <div className="thankyou-page mt-5">
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${Bannerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "40vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <div
          className="content-container d-flex justify-content-center align-items-md-center align-items-top p-5"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text-container text-white text-center p-3">
            <h1 style={{ fontSize: "3rem", color: "white" }}>ThankYou</h1>
            <p>
              <span style={{ color: "#1EFFAC" }}>HOME</span>{" "}
              <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
              ThankYou
            </p>
          </div>
        </div>
      </div>
      <div
        className="thank-you-card d-flex flex-column justify-content-center align-items-md-center"
        style={{ padding: "6rem 0" }}
      >
        <div
          className="tick-container d-flex justify-content-center align-items-center mb-3"
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#05BF83",
            boxShadow: "0px 0px 10px 1px rgb(175 255 229)",
          }}
        >
          <DoneIcon style={{ fontSize: "5rem", fontWeight: "bold" }} />
        </div>
        <div className="thankyou-text text-center">
          <h2 style={{ color: "#05BF83" }}>Thanks for your booking!</h2>
          <p>You'll receive a confirmation email at mail@yourgmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
