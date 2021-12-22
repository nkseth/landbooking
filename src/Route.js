import React from "react";
import { Route } from "react-router-dom";
import { Home, Listing, ViewDetail, BookNow, ThankYou ,EditProfile,Addlisting,Managelisting,Editlisting} from "./Pages";
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
      <PrivateRoute><Route exact path="/editlisting/:id" component={Editlisting} /></PrivateRoute>
      <PrivateRoute><Route exact path="/managelistings" component={Managelisting} /></PrivateRoute>
    </>
  );
};

export default Routes;
