import React from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Listing = () => {
  const ListingData = [
    {
      title: "Yard Can in NewYork",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Tennis Court",
      imageSrc:
        "https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Basket Ball Court",
      imageSrc:
        "https://www.versacourt.com/cmss_files/photogallery/structure/Residential_Basketball_Courts/image57726.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Yard Can in NewYork",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Tennis Court",
      imageSrc:
        "https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Basket Ball Court",
      imageSrc:
        "https://www.versacourt.com/cmss_files/photogallery/structure/Residential_Basketball_Courts/image57726.jpg",
      location: "Bishop Avenue, Newyork",
    },
  ];
  return (
    <div id="listing" className="listing my-5">
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
          marginBottom: "10rem",
        }}
      >
        <div
          className="content-container d-flex justify-content-center align-items-center  p-5"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text-container text-white text-center p-5">
            <h1 style={{ fontSize: "3rem" }}>LISTING</h1>
            <p>
              <span style={{ color: "#1EFFAC" }}>HOME</span>{" "}
              <ArrowForwardIosIcon sx={{ fontSize: "15px" }} />
              LISTING
            </p>
          </div>
          <div
            className="formInput-container container w-75 p-md-4 p-3"
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: " 0px 0px 5px 0px rgba(120,115,115,0.75)",
              position: "absolute",
              bottom: "-18vh",
            }}
          >
            <div className="text-center mb-4" style={{ color: "#334E6F" }}>
              <h3>Search For Listing</h3>
            </div>
            <Form className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Form.Control
                style={{
                  outline: "none",
                  boxShadow: "none",
                  borderRadius: "0",
                  padding: "10px",
                }}
                size="lg"
                type="location"
                placeholder="Location"
                className="m-2 w-90"
              />
              <Form.Control
                style={{
                  outline: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
                size="lg"
                type="dropdown"
                placeholder="Choose Category"
                className="m-2 w-90"
              />
              <Button
                variant="btn "
                className="m-2"
                style={{
                  padding: "0 2rem",
                  backgroundColor: "#1EFFAC",
                  color: "white",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                <h4>Search</h4>
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="cards-container d-flex justify-content-center flex-wrap my-5">
        {ListingData.map((item, index) => {
          return (
            <div key={index}>
              <Card
                title={item.title}
                subTitle={item.location}
                imageSrc={item.imageSrc}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          count={5}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Listing;
