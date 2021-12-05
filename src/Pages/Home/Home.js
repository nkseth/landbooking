import React from "react";
import {
  MainBanner,
  PopularListing,
  BookingSteps,
  Testimonials,
  Modal,
} from "../../Components";

const Home = () => {
  return (
    <div>
      <MainBanner />
      <PopularListing />
      <Modal />
      <BookingSteps />
      <Testimonials />
    </div>
  );
};

export default Home;
