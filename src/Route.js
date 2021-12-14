import React from "react";
import { Route } from "react-router-dom";
import { Home, Listing, ViewDetail, BookNow, ThankYou ,EditProfile,Addlisting,Userlisting} from "./Pages";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/view-detail" component={ViewDetail} />
      <Route exact path="/book-now" component={BookNow} />
      <Route exact path="/editprofile" component={EditProfile} />
      <Route exact path="/thankyou" component={ThankYou} />
      <Route exact path="/addlisting" component={Addlisting} />
      <Route exact path="/userlisting" component={Userlisting} />
    </>
  );
};

export default Routes;
