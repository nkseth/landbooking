/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  MainBanner,
  PopularListing,
  BookingSteps,
  Testimonials,
  ListingSteps
} from "../../Components";

const Home = ({ history }) => {
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
    }
  }, [user.user]);

  return (
    <div style={{ maxWidth: "100vw" }}>
      <MainBanner />
      <PopularListing />
      <div style={{paddingTop: "8rem"}} id="HowWeWork">
      <BookingSteps />
      </div>
      <div style={{paddingTop: "8rem"}}id='becomeahost'>
      <ListingSteps />
      </div>
      <Testimonials />
    </div>
  );
};

export default withRouter(Home);
