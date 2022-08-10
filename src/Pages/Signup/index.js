/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {  Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import InputMask from "react-input-mask";

import "./Editprofile.css";

import { Avatar } from "@mui/material";
import Locationstring from "../../Components/locationstring/location";
import { locationnull } from "../../redux/slices/location";
import { opensnackbar, signup } from "../../redux/slices/user";
import { withRouter,useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const Editprofile = ({ history }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }
let query = useQuery();

  React.useEffect(() => {
    if (user.user) {
      history.push("/");
    }
  }, [user.user]);

  React.useEffect(() => {
    dispatch(locationnull());
  }, []);
  const data = useSelector((state) => state.location);
  const [baseurl, setbaseurl] = React.useState("");
  const [profiledetails, setprofiledetails] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    owner: "",
    zipcode: "",
    gender: 1,
    dob: "",
    ishost: query.get("host")==="true",
    password: "",
    cpassword: "",
    image: null,
  });

  useEffect(() => {
    setprofiledetails({ ...profiledetails, zipcode: data.zipcode });
  }, [data.zipcode]);

  const addimage = async (e) => {
   
    setprofiledetails({ ...profiledetails, image: e.target.files[0] });
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    await toBase64(e.target.files[0]).then((result) => {
    
      setbaseurl(result);
   
    });
  };

  const onSignup = () => {
    if (profiledetails.password === profiledetails.cpassword) {
   
      const formdata = new FormData();
      formdata.append("name", profiledetails.name);
      formdata.append("email", profiledetails.email);
      formdata.append("phone", profiledetails.phone);
      formdata.append("password", profiledetails.password);
      formdata.append("latitude", data.latitude);
      formdata.append("longitude", data.longitude);
      formdata.append("zipcode", data.zipcode);
      formdata.append("gender", profiledetails.gender);
      formdata.append("dob", profiledetails.dob);
      formdata.append("address", data.locationstring[0]);
      formdata.append("registerAsHost", profiledetails.ishost);
      formdata.append('designation',profiledetails.owner);
      if (profiledetails.image) formdata.append("image", profiledetails.image);
      dispatch(signup(formdata));
    } else {
      dispatch(opensnackbar("error", "Password Does not Match"));
    }
  };

  return (
    <section className="padd-0" style={{ marginTop: "150px" }}>
      <div className="container d-flex flex-direction-column align-items-center justify-content-center">
        <div className="col-md-10 translateY-60 col-sm-12 col-md-offset-1">
          {/* General Information */}
          <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <div className="avater-box">
                <Avatar
                  src={baseurl}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                  }}
                  className="img-fluid img-circle edit-avater"
                  alt=""
                />
                <div className="upload-btn-wrapper">
                  <button className="btn theme-btn">Change Avatar</button>
                  <input
                    type="file"
                    name="myfile"
                    onChange={(e) => {
                      addimage(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                <div className="col-sm-6">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profiledetails.name}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Email</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="nanaksethh@gmail.com"
                      value={profiledetails.email}
                      onChange={(e) => {
                        setprofiledetails({
                          ...profiledetails,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Phone</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <InputMask
                      mask="(+1) 999 999 9999"
                      className="form-control"
                      defaultValue="91 703 4448 855  "
                      value={profiledetails.phone}
                      onChange={(e) => {
                        setprofiledetails({
                          ...profiledetails,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <Locationstring />
                <div className="col-sm-6">
                  <label>Owner Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profiledetails.owner}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        owner: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>zipcode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profiledetails.zipcode}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        zipcode: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Gender</label>
                  <select
                    data-placeholder="Choose Category"
                    className="form-control chosen-select"
                    value={profiledetails.gender}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        gender: e.target.value,
                      });
                    }}
                  >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Other</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label>DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    value={profiledetails.dob}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        dob: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Register as</label>
                  <select
                    data-placeholder="Choose Category"
                    className="form-control chosen-select"
                    value={profiledetails.ishost}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        ishost: e.target.value,
                      });
                    }}
                  >
                    <option value={true}>Customer And Host</option>
                    <option value={false}>Only Customer</option>
                  </select>
                </div>
                {/* <div className="col-sm-6 " style={{display: 'flex',flexDirection: 'column'}}>
                <label style={{fontWeight:'bold'}}>Profile picture</label>
                <input type="file" name="myfile" />
              </div> */}
              </div>
            </form>
          </div>
          {/* End General Information */}
          {/* Change Password Information */}
          <div className="add-listing-box opening-day mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <i className="ti-lock theme-cl" />
              <h3>Set your Password</h3>
              <p>Remember, Your Password should not be easy and common</p>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                <div className="col-sm-6">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={profiledetails.password}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={profiledetails.cpassword}
                    onChange={(e) => {
                      setprofiledetails({
                        ...profiledetails,
                        cpassword: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* End Change Password Information */}
          <div className="text-center">
            <Button
              className="btn theme-btn"
              title="Submit Listing"
              onClick={onSignup}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Editprofile);
