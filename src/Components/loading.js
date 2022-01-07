import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";
export default function SimpleBackdrop() {
  const user = useSelector((state) => state.user);

  console.log("helloa", user.isLoading);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={user.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
