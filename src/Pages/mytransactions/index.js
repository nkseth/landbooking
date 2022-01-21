/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRightAltRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { baseurl } from "../../config";

import Booking from "./transection";
import Bannerbg from "../../assets/title-bg.jpg";
import { gettransaction } from "../../redux/slices/reservations";
import { useParams } from "react-router-dom";
import moment from "moment";
const Mybookings = ({ history }) => {
  const {type}=useParams()
  const [f, setf] = React.useState([]);
  const data = useSelector((state) => state.reservartions);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
      else dispatch(gettransaction());
    }
  }, [user.user]);
  React.useEffect(() => {
    const local=[]
    if (data?.transaction) {
      if(type==="seller"){
        data?.transaction?.map((item) => {
          if(item.type===3)
              local.push(item)
        })
     
      } else{
        data?.transaction?.map((item) => {
          if(item.type===1 || item.type===2)
              local.push(item)
        })
      }
      
      setf(local);
    }
  }, [data.transaction,type]);

  return (
    <div>
      <div className="clearfix " style={{ marginTop: 50 }} />
      <section
        className="title-transparent page-title"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <div className="container">
          <div className="title-content">
            <h1>{type==="seller" ?" Transactions & Payout":"My Transactions"}</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <ArrowRightAltRounded />
              <span className="current">my Payouts </span>
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
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="manage-listing padd-top-0 " style={{minHeight:'300px'}}>
        <div className="container">
          <h5 className="mb-5">{type==="seller" ?" Transactions & Payout":"My Transactions"}</h5>
          <div className="col-md-12 col-sm-12">
            {/* Start All Listing List */}
            <div className="row">
              <div className="col-md-12">
                <div className="small-list-wrapper">
                  <ul>
                    {f?.length > 0 ? (
                      f?.sort((a,b)=>{return moment(b.createdAt).diff(a.createdAt,"seconds")})?.map((item) => {
                        if(type==="seller" && (item.type===3))
                        return <Booking data={item} typeofuser={type} />
                        else if((item.type===1 || item.type===2 ) && type!=="seller")
                        return <Booking data={item} typeofuser={type} />
                      })
                    ) : (
                      <h5>No Payout yet</h5>
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
