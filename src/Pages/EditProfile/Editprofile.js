/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Enterotp from "../../Components/Modal/enterotp";
import InputMask from "react-input-mask";
import "./Editprofile.css";

import { Avatar } from "@mui/material";
import Locationstring from "../../Components/locationstring/location";
import { locationnull } from "../../redux/slices/location";
import { opensnackbar} from "../../redux/slices/user";
import { withRouter } from "react-router-dom";
import {
  getprofiledetails,
  updategeneralsettings,
  updateprivacysettings,
} from "../../redux/slices/profile";

import { baseurl } from "../../config";

const Editprofile = ({ history }) => {
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!user.user) {
      history.push("/");
    }
    if (user.user) {
      dispatch(getprofiledetails());
    }
  }, [user.user]);

  React.useEffect(() => {
    if (user) dispatch(locationnull());
  }, [user.user]);

  const [localaddress, setlocalddress] = React.useState("");

  const updateaddress = (string) => {
    setlocalddress(string);
  };
  const data = useSelector((state) => state.location);
  const [baseurli, setbaseurl] = React.useState("");
  const [profiledetails, setprofiledetails] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    owner: "",
    zipcode: "",
    gender: 1,
    dob: "",

    password: "",
    cpassword: "",
    image: null,
  });

  useEffect(() => {
    setprofiledetails({ ...profiledetails, zipcode: data.zipcode });
  }, [data.zipcode]);


  useEffect(() => {
    if (profile.profile) {
      setprofiledetails({
        ...profiledetails,
        name: profile.profile.name,
        email: profile.profile.email,
        phone: profile.profile.phone,
        address: profile.profile.address,
        dob: profile.profile.dob,
        gender: profile.profile.gender,
        zipcode: profile.profile.zipcode,
        latitude: profile.profile.latitude,
        longitude: profile.profile.longitude,
        owner:profile.profile.designation
      });
      setbaseurl(`${baseurl}${profile.profile?.image?.path}`);
      setlocalddress(profile.profile.address);
    }
  }, [profile.profile]);

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
  const updateprivacysettingslocal = () => {
    if (
      profiledetails.password === "" ||
      profiledetails.password === profiledetails.cpassword
    ) {
      const formdata = new FormData();
      formdata.append("displayName", profiledetails.name);
      debugger;
      if (profiledetails.image !== null)
        formdata.append("displayImage", profiledetails.image);
      formdata.append("email", profiledetails.email);
      formdata.append("phone", profiledetails.phone.toString());
      if (profiledetails.password !== "")
        formdata.append("password", profiledetails.password);
      formdata.append("deleteImage", baseurli === "");
      if (profiledetails.password !== "") {
        if (profiledetails.password === profiledetails.cpassword) {
          dispatch(updateprivacysettings(formdata));
        } else
          dispatch(
            opensnackbar(
              "error",
              "Passwords and confirm Password does not match"
            )
          );
      } else {
        dispatch(updateprivacysettings(formdata));
      }

      setprofiledetails({ ...profiledetails, image: null });
    } else
      dispatch(
        opensnackbar("error", "Password and Confirm Password is not Same")
      );
  };

  const updategeneralsettingslocal = () => {
   
    const finalobject = {};

    finalobject["name"] = profiledetails.name;
    finalobject["latitude"] =
      localaddress === profile.profile.address
        ? profile.profile.latitude
        : data.latitude;
    finalobject["longitude"] =
      localaddress === profile.profile.address
        ? profile.profile.longitude
        : data.longitude;
    finalobject["zipcode"] =
      localaddress === profile.profile.address
        ? profile.profile.zipcode
        : data.zipcode;
    finalobject["gender"] = profiledetails.gender;
    finalobject["dob"] = profiledetails.dob;
    finalobject["address"] = localaddress;
    finalobject["designation"] = profiledetails.owner;
    dispatch(updategeneralsettings(finalobject));
  };

  const [show, setshow] = React.useState(false);
  const [type, settype] = React.useState(1);

  const onclose = () => {
    setshow(false);
  };
  return (
    <section className="padd-0" style={{ marginTop: "150px" }}>
      <Enterotp
        show={show}
        close={onclose}
        type={type}
        userid={user.user?.user?.uuid}
      />

      <div className="container d-flex flex-direction-column align-items-center justify-content-center">
        <div className="col-md-10 translateY-60 col-sm-12 col-md-offset-1">
          {/* General Information */}
          <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
            {!user?.user?.user?.emailVerified ||
            !user?.user?.user?.phoneVerified ? (
              <div
                className="d-flex justify-content-center align-content-center w-100 p-3"
                style={{ backgroundColor: "#c22027" }}
              >
                <h6 style={{ color: "white", marginBottom: 0 }}>
                  Please verify Your Email and Phone No. to contiune Using the
                  Application
                </h6>
              </div>
            ) : null}

            <div className="listing-box-header">
              <i className="ti-lock theme-cl" />
              <h3> Privacy Settings</h3>
              <p>Remember, Your Password should not be easy and common</p>
            </div>
            <div className="listing-box-header">
              <div className="avater-box">
                <Avatar
                  src={baseurli}
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
              <p
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  marginTop: 5,
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setbaseurl("");
                }}
              >
                Remove Image
              </p>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                <div className="col-sm-6">
                  <label>Email</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="email"
                      className="form-control"
                      value={profiledetails.email}
                      onChange={(e) => {
                        setprofiledetails({
                          ...profiledetails,
                          email: e.target.value,
                        });
                      }}
                    />

                    {user.user?.user?.emailVerified ? (
                      <img
                        src="https://img.icons8.com/color/48/000000/verified-account.png"
                        alt="verified"
                        style={{ width: "30px", height: "30px" }}
                      />
                    ) : (
                      <Button
                        variant="outline-primary"
                        style={{
                          width: "150px",
                          height: "40px",
                          marginLeft: "5px",
                        }}
                        onClick={() => {
                          setshow(true);
                          settype(1);
                        }}
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Phone</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <InputMask
                      mask="(+1) 999 999 9999"
                      className="form-control"
                      value={profiledetails.phone}
                      onChange={(e) => {
                        setprofiledetails({
                          ...profiledetails,
                          phone: e.target.value,
                        });
                      }}
                    />

                    {user.user?.user?.phoneVerified ? (
                      <img
                        src="https://img.icons8.com/color/48/000000/verified-account.png"
                        style={{ width: "30px", height: "30px" }}
                        alt="verified"
                      />
                    ) : (
                      <Button
                        variant="outline-primary"
                        style={{
                          width: "150px",
                          height: "40px",
                          marginLeft: "5px",
                        }}
                        onClick={() => {
                          setshow(true);
                          settype(2);
                        }}
                      >
                        Verify
                      </Button>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <label>Password</label>
                  <input
                    type="text"
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
                    type="text"
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
            <div className="text-center mw-50">
              <Button
                style={{
                  maxWidth: "50%",
                  backgroundColor: "#1effac",
                  border: "none",
                  color: "white",
                  marginTop: "20px",
                }}
                title="Submit Listing"
                onClick={updateprivacysettingslocal}
              >
                Update
              </Button>
            </div>
          </div>

          <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header"></div>
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

                <Locationstring
                  default={profile.profile?.address}
                  dtype={false}
                  onaddresschanging={updateaddress}
                  getaddress={true}
                />
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

                {/* <div className="col-sm-6 " style={{display: 'flex',flexDirection: 'column'}}>
                <label style={{fontWeight:'bold'}}>Profile picture</label>
                <input type="file" name="myfile" />
              </div> */}
              </div>
            </form>
            <div className="text-center mw-50">
              <Button
                style={{
                  maxWidth: "50%",
                  backgroundColor: "#1effac",
                  border: "none",
                  color: "white",
                  marginTop: "20px",
                }}
                title="Submit Listing"
                onClick={updategeneralsettingslocal}
              >
                Update General Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Editprofile);
