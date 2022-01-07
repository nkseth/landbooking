import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  return <>{user.user ? children : <Redirect to="/" />}</>;
};
export default PrivateRoute;
