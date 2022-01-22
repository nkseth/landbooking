/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Avatar, Grid} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import Blockmodal from "../../Components/Modal/blockdates";
import { Link, useParams } from "react-router-dom";
import { viewdetailsprivate } from "../../redux/slices/popularlisting";
import { Deleteblock, viewblock } from "../../redux/slices/slotmanagement";
import Bannerbg from "../../assets/title-bg.jpg";
import {
  ArrowRightAltRounded,
  DeleteTwoTone, ModeEditOutlined,
} from "@mui/icons-material";
import { baseurl } from "../../config";
const BookNow = ({ history }) => {

  const user = useSelector((state) => state.user);
  const vewdata = useSelector((state) => state.popularlisting);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
      else {
        dispatch(viewdetailsprivate(id));
        dispatch(viewblock(id));
      }
    }
  }, [user.user]);

  const { blocks } = useSelector((state) => state.slotmanagement);
  const [blockd, setblock] = React.useState(false);
  const [edit, setedit] = React.useState(false);
  const [bid, setbid] = React.useState("");
  const closeblock = () => {
    setblock(false);
    setedit(false);
  };

  const [editto, seteditto] = useState("");
  const [editfrom, seteditfrom] = useState("");
  const [editslot, seteditslot] = useState(null);
  const { id } = useParams();
  const [searchtodate, setsearchtodate] = useState("");
  const [searchFromdate, setsearchFromdate] = useState("");
  return (
    <Grid
      container
      mt={6}
      justifyContent="center"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      alignItems: "center"
      }}
    >
       <section
        className="title-transparent page-title w-100"
        style={{ backgroundImage: `url(${Bannerbg})` }}
      >
        <div className="container">
          <div className="title-content">
            <h1>Blocked Dates</h1>
            <div className="breadcrumbs">
              <Link href="#">Home</Link>
              <ArrowRightAltRounded />
              <span className="current">Block Dates </span>
            </div>
          </div>
        </div>
      </section>
      <section className="padd-0 w-100">
        <div className="container">
          <div className="col-md-12 translateY-60 col-sm-12">
            {/* General Information */}
            <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
              <div className="listing-box-header">
                <div className="avater-box">
                  <Avatar
                    src={`${baseurl}${user.user?.user?.displayImage?.path}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                    }}
                    className="img-responsive img-circle edit-avater"
                    alt=""
                  />
                  <span className="avater-status status-pulse online" />
                </div>
                <h3 className="mt-2">{user.user.user.displayName}</h3>
                <p>{blocks?.length} Dates Blocked</p>
              </div>
            </div>
            {/* End General Information */}
          </div>
        </div>
      </section>
      <Blockmodal
        id={id}
        show={blockd}
        close={closeblock}
        slot={vewdata?.listingdetails?.slots}
        edit={edit}
        to={editto}
        from={editfrom}
        editslots={editslot}
        bid={bid}
      />

      <Grid
        item
        xs={12}
        direction="row"
        justifyContent="space-between"
        style={{}}
      >
        <div className="d-flex justify-content-between p-3 align-items-center flex-wrap">
          <h5>Blocked Dates</h5>

          <Button
            style={{ maxWidth: "fit-content" }}
            onClick={() => {
              setblock(true);
            }}
          >
            ADD A BLOCK
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={6} container justifyContent="center" alignItems="center"   
    
      >
        <div style={{minWidth:'100px'}}>
          <label>From</label>
          <input
            type="date"
            className="form-control"
            value={searchFromdate}
            style={{minWidth:'200px'}}
            onChange={(e) => {
              setsearchFromdate(e.target.value);
            }}
          />
        </div >
        <div className="mx-md-2" style={{minWidth:'200px'}}>
          <label>To</label>
          <input
            type="date"
            style={{minWidth:'100px'}}
            className="form-control"
            value={searchtodate}
            onChange={(e) => {
              setsearchtodate(e.target.value);
            }}
          />
        </div>
        <div style={{  marginTop: 10 }}
         className="mx-md-2"
        >
          
        </div>

      </Grid>
      <Button
            style={{ maxWidth: "fit-content",marginTop:'10px' }}
            onClick={() => {
              dispatch(viewblock(id, searchtodate, searchFromdate));
            }}
          >
            SEARCH
          </Button>
      <Grid
        item
        md={12}
        container
        justifyContent="start"
        style={{ padding: "10px"}}
      >
        {blocks?.map((item) => {
          return (
            <div
              className="px-4 py-3 d-flex m-2"
              style={{
                backgroundColor: "#1effac",
                fontSize: "15px",
                color: "white",
                maxWidth: "fit-content",
              }}
            >
              <div>
                <p
                  style={{
                    marginBottom: 0,
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>From: </span>
                  {item.from}
                  <br />
                  <span style={{ fontWeight: "bold" }}>to: </span>
                  {item.to}
                </p>
                <div className="d-flex">
                  {item.slots !== null
                    ? item.slots.map((slot) => {
                        return (
                          <div
                            style={{
                              padding: "5px",
                              borderRadius: "10px",
                              border: "1px solid #1effac",
                              margin: "5px",
                              maxHeight: "fit-content",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "30px",
                              height: "30px",
                              cursor: "pointer",
                              background: "white",
                              userSelect: "none",
                              color: "gray",
                            }}
                          >
                            {slot}
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>

              <div
                className="d-flex justify-content-center align-content-center flex-column p-2 "
                style={{ marginLeft: "10px" }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#ff3a72",
                    padding: "5px",
                    margin: "2px",
                  }}
                  onClick={() => {
                    setedit(true);
                    setblock(true);
                    seteditto(item.to);
                    seteditfrom(item.from);
                    setbid(item.uuid);
                    if (item.slots !== null) seteditslot(item.slots);
                  }}
                >
                  <ModeEditOutlined />
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#ff3a72",
                    padding: "5px",
                    margin: "2px",
                  }}
                  onClick={() => {
                    dispatch(Deleteblock(id, item.uuid));
                    setTimeout(() => {
                      dispatch(viewblock(id));
                    }, 1000);
                  }}
                >
                  <DeleteTwoTone />
                </div>
              </div>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BookNow;
