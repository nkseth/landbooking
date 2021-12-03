import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";

const MainBanner = () => {
  return (
    <div
      className="home-banner mt-5"
      style={{
        backgroundImage: `url(${Bannerbg})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div
        className="content-container  p-5"
        style={{
          backgroundColor: "rgba(58, 87, 135, 0.45)",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="text-container text-white text-center p-5">
          <h1 style={{ fontSize: "3rem" }}>
            Looking to rent a Yard, parking space or Tennis Court for an Hour or
            more!!
          </h1>
          <p>
            You Are At The Right Place. Lets Go Ahead And Grab The Best Deal
          </p>
        </div>
        <div className="formInput-container container w-75">
          <Form className="d-flex">
            <Form.Control
              style={{ outline: "none", borderRadius: "0", padding: "1rem" }}
              size="lg"
              type="location"
              placeholder="Location"
            />
            <Form.Control
              style={{ outline: "none", borderRadius: "0" }}
              size="lg"
              type="dropdown"
              placeholder="Shop & Education"
            />
            <Button
              variant="btn "
              style={{
                padding: "0 2rem",
                backgroundColor: "#1EFFAC",
                color: "white",
                borderRadius: "0",
              }}
            >
              <h4>Search</h4>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
