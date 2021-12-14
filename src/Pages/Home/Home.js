import React from "react";
import {
  MainBanner,
  PopularListing,
  BookingSteps,
  Testimonials,
} from "../../Components";

const Home = () => {
  return (
    <div style={{maxWidth:"100vw"}}>
      <MainBanner />
      <PopularListing />
      <BookingSteps />
      <Testimonials />
    </div>
  );
};

export default Home;
