import React from "react";
import { Route } from "react-router-dom";
import { Home, Listing } from "./Pages";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
    </>
  );
};

export default Routes;
