import React from "react";
import {
  MainBanner,
  PopularListing,
  BookingSteps,
  Testimonials,
} from "../../Components";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <PopularListing />
      <BookingSteps />
      <Testimonials />
    </div>
  );
};

export default Home;
