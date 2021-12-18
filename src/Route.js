import React from "react";
import { Route } from "react-router-dom";
import { Home, Listing, ViewDetail, BookNow, ThankYou ,EditProfile,Addlisting,Userlisting} from "./Pages";
import PrivateRoute from "./privateroute";
const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/view-detail/:id" component={ViewDetail} />
      <PrivateRoute> <Route exact path="/book-now" component={BookNow} /></PrivateRoute>
      <PrivateRoute><Route exact path="/editprofile" component={EditProfile} /></PrivateRoute>
      <PrivateRoute> <Route exact path="/thankyou" component={ThankYou} /></PrivateRoute>
      <PrivateRoute><Route exact path="/addlisting" component={Addlisting} /></PrivateRoute>
      <PrivateRoute><Route exact path="/userlisting" component={Userlisting} /></PrivateRoute>
    </>
  );
};

export default Routes;
