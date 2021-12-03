import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";

const PopularListing = () => {
  const ListingData = [
    {
      title: "Yard Can in NewYork",
      imgaesrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Tennis Court",
      imgaesrc:
        "https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg",
      location: "Bishop Avenue, Newyork",
    },
    {
      title: "Basket Ball Court",
      imgaesrc:
        "https://www.versacourt.com/cmss_files/photogallery/structure/Residential_Basketball_Courts/image57726.jpg",
      location: "Bishop Avenue, Newyork",
    },
  ];
  return (
    <div className="popular-listing m-5">
      <div className="heading-container text-center">
        <h1>
          Popular <span style={{ color: "#1EFFAC" }}>Listng</span>
        </h1>
        <p>Check our most Popular Listing</p>
      </div>
      <div className="cards-container d-flex justify-content-center flex-wrap">
        {ListingData.map((item, index) => {
          return (
            <div className="card mx-lg-3 mx-md-1 mx-sm-0 my-3" key={index}>
              <Card sx={{ width: 400 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.imgaesrc}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                </CardContent>
                <CardActions className="d-flex justify-content-between">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                  <Button size="small" style={{ color: "#1EFFAC" }}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularListing;
