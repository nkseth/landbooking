import React from "react";
import Bannerbg from "../../assets/title-bg.jpg";
import "./ViewDetail.css";
import { Rating, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Location,
  Info,
  Amenities,
  Overview,
  Reviews,
  Gallery,
  Reservation,
} from "../../Components";

const ViewDetail = () => {
  return (
    <div id="listing" className="listing my-md-5 my-3">
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${Bannerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "60vh",
          width: "100vw",
          position: "relative",
          marginBottom: "3rem",
        }}
      >
        <div
          className="content-container d-flex justify-content-start justify-content-md-end align-items-md-end align-items-end p-2"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div className="banner-btns-container d-flex flex-md-row flex-column justify-content-center align-items-md-end align-items-start">
            <div
              className="location-container mx-2"
              style={{
                color: "white",
              }}
            >
              <p>
                <LocationOnIcon />
                #2852, SCO 20 Newyork
              </p>
            </div>
            <div className="rating-container d-flex justify-content-md-center justify-content-end align-items-center mx-2">
              <Rating
                name="half-rating m-1"
                defaultValue={5}
                precision={1}
                style={{
                  color: "white",
                  padding: "0.8rem 1.4rem",
                  backgroundColor: "#1EFFAC",
                }}
              />
              <button className="short-list-btn d-flex justify-content-center m-1">
                <FavoriteBorderOutlinedIcon />
                <Typography className="short-list"> Short List</Typography>
              </button>
            </div>
          </div>
          <div
            className="owner-card-container d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "white",
              borderRadius: "50px",
              padding: 0,
              boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
              position: "absolute",
              left: 60,
              bottom: -40,
            }}
          >
            <div
              className="owner-img mr-2"
              style={{ width: "4.5rem", height: "4.5rem", borderRadius: "50%" }}
            >
              <img
                src="https://webdesign.riolabz.com/yardcan/html/assets/img/avatar.jpg"
                alt=""
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              className="name-container  mx-3"
              style={{ lineHeight: 0, color: "#334E6F" }}
            >
              <h4>Sujith K</h4>
              <p style={{ color: "#1EFFAC" }}>Business Man</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid-container"
        style={{
          width: "100vw",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={11} md={6} classname="px-5">
            <Info />
            <Overview />
            <Amenities />
            <Reviews />
          </Grid>
          <Grid item xs={11} md={3}>
            <Reservation />
            <Gallery />
            <Location />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewDetail;
