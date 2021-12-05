import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";

const MainBanner = () => {
  return (
    <div
      className="home-banner mt-5"
      style={{
        backgroundImage: `url(${Bannerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="content-container  p-md-5 p-2"
        style={{
          backgroundColor: "rgba(58, 87, 135, 0.45)",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="text-container text-white text-center p-md-5 p-2 py-4">
          <h1 style={{ fontSize: "2.6rem", letterSpacing: 2, wordSpacing: 3 }}>
            Looking to rent a Yard, parking space or Tennis Court for an Hour or
            more!!
          </h1>
          <p>
            You Are At The Right Place. Lets Go Ahead And Grab The Best Deal
          </p>
        </div>
        <div className="formInput-container container">
          <Form className="d-flex flex-md-row flex-column w-75">
            <div className="d-flex justify-content-center align-items-center bg-white w-100 py-0 px-2 my-1">
              <LocationOnOutlinedIcon
                className="d-flex justify-content-end"
                style={{ color: "#909DB4" }}
              />
              <Form.Control
                style={{
                  outline: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                  fontSize: "15px",
                  border: "none",
                }}
                size="lg"
                type="location"
                placeholder="Location"
                className="py-md-4 py-2 px-0"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center bg-white border-start my-1 w-100 py-0 px-2 p-0">
              <FilterNoneOutlinedIcon
                fontSize="small"
                className="d-flex justify-content-end"
                style={{ color: "#909DB4" }}
              />
              <Form.Select
                style={{
                  color: "#909DB4",
                  outline: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                  fontSize: "15px",
                  border: "none",
                }}
                size="lg"
                type="location"
                placeholder="Choose Category"
                className="py-md-4 py-2 px-0 "
              >
                <option>Choose Category</option>
                <option>Food and Resturant</option>
                <option>Shop and Education</option>
                <option>Education</option>
                <option>Business</option>
              </Form.Select>
            </div>
            <Button
              variant="btn"
              style={{
                backgroundColor: "#1EFFAC",
                color: "white",
                borderRadius: "0 5px 5px 0",
                boxShadow: "none",
              }}
              className=" px-5 p-2 my-1"
            >
              <h4 style={{ fontWeight: 300 }}>Search</h4>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
