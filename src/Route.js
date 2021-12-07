import React from "react";
import { Route } from "react-router-dom";
import { Home, Listing, ViewDetail, BookNow, ThankYou } from "./Pages";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/view-detail" component={ViewDetail} />
      <Route exact path="/book-now" component={BookNow} />
      <Route exact path="/thankyou" component={ThankYou} />
    </>
  );
};

export default Routes;
