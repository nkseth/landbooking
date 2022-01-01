import React from "react";
import { Route } from "react-router-dom";

import { Home, Listing, ViewDetail, BookNow, ThankYou ,EditProfile,Addlisting,Managelisting,Editlisting,Signup
,Mybookings,
Favourites,
Reservations,
Blockdates
} from "./Pages";
import PrivateRoute from "./privateroute";
import Geaustroute from './guestroute'

const Routes = () => {

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/listing" component={Listing} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/view-detail/:id" component={ViewDetail} />
      <PrivateRoute> <Route exact path="/book-now/:id" component={BookNow} /></PrivateRoute>
      <PrivateRoute  type="exclude"  ><Route exact path="/editprofile" component={EditProfile} /></PrivateRoute>
      <PrivateRoute> <Route exact path="/thankyou" component={ThankYou} /></PrivateRoute>
      <PrivateRoute><Route exact path="/addlisting" component={Addlisting} /></PrivateRoute>
      <PrivateRoute><Route exact path="/editlisting/:id" component={Editlisting} /></PrivateRoute>
      <PrivateRoute><Route exact path="/managelistings" component={Managelisting} /></PrivateRoute>
      <PrivateRoute><Route exact path="/mybookings" component={Mybookings} /></PrivateRoute>
      <PrivateRoute><Route exact path="/myfavourite" component={Favourites} /></PrivateRoute>
      <PrivateRoute><Route exact path="/view-reservations/:id" component={Reservations} /></PrivateRoute>
      <PrivateRoute><Route exact path="/blockedDates/:id" component={Blockdates} /></PrivateRoute>
    </>
  );
};

export default Routes;
