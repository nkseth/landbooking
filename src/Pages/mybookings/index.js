/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { baseurl } from "../../config";
import { getbookings } from "../../redux/slices/mybookings";
import Booking from "./bookings";
import Bannerbg from "../../assets/title-bg.jpg";
import { ArrowRightAltRounded } from "@mui/icons-material";
const Mybookings = ({ history }) => {
  const data = useSelector((state) => state.mybookings);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
      else dispatch(getbookings());
    }
  }, [user.user]);

  return (
    <div>
      <div className="clearfix " style={{ marginTop: 50 }} />
      <section
        className="title-transparent page-title"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <div className="container">
          <div className="title-content">
            <h1>Booking</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <ArrowRightAltRounded />
              <span className="current">Booking </span>
            </div>
          </div>
        </div>
      </section>
      <section className="padd-0">
        <div className="container">
          <div className="col-md-12 translateY-60 col-sm-12">
            <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
              <div className="listing-box-header">
                <div className="avater-box">
                  <Avatar
                    style={{ width: "100%", height: "100%" }}
                    src={`${baseurl}${user.user?.user?.displayImage?.path}`}
                    className="img-responsive img-circle edit-avater"
                    alt=""
                  />
                  <span className="avater-status status-pulse online" />
                </div>
                <h3 className="mt-1">{user.user?.user.displayName}</h3>
                <p>
                  {data?.mybooking?.length ? data?.mybooking?.length : 0}{" "}
                  Listing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-listing padd-top-0">
        <div className="container">
          <h5 className="mb-5">My Bookings</h5>
          <div className="col-md-12 col-sm-12">
            {/* Start All Listing List */}
            <div className="row">
              <div className="col-md-12">
                <div className="small-list-wrapper">
                  <ul>
                    {data?.mybooking?.length > 0 ? (
                      data.mybooking?.map((item) => {
                        return <Booking data={item} />;
                      })
                    ) : (
                      <h5>No bookings yet</h5>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* End All Listing List */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default withRouter(Mybookings);
