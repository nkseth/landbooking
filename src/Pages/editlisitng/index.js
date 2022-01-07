/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getcategory } from "../../redux/slices/categories";
import { amenity } from "../../redux/slices/amenity";
import {
  locationfind,
  locationnull,
  locationfindll,
  locationlltz,
} from "../../redux/slices/location";

import Addgallery from "./Addgalary";
import { useParams } from "react-router-dom";
import { viewdetailsprivate } from "../../redux/slices/popularlisting";
import { updatelisting } from "../../redux/slices/Addlisting";
import { withRouter } from "react-router-dom";

const Listing = ({ history }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getcategory());
    dispatch(amenity());
    dispatch(viewdetailsprivate(id));
  }, [id]);
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user.user) {
      if (!user.user.user.emailVerified || !user.user.user.phoneVerified)
        history.push("/editprofile");
    }
  }, [user.user]);

  const [selectedamenity, setselectedeminity] = React.useState([]);
  const [gImages, setgimages] = React.useState([]);
  const categories = useSelector((state) => state.categories);
  const amenities = useSelector((state) => state.amenity);
  const location = useSelector((state) => state.location);
  const details = useSelector((state) => state.popularlisting);
  const [selectedcategory, setselectedcategory] = React.useState({});
  const [locationstring, setlocationstring] = React.useState("");
  const [displayauto, setdisplayauto] = React.useState(false);
  const [del, setdel] = React.useState([]);
  const [data, setdata] = React.useState({
    title: "",
    discription: "",
    status: 1,
    rent: "",
    slots: 0,
    guestLimit: { infants: "", adults: "", children: "" },
    zipcode: "",
  });

  React.useEffect(() => {
    if (details.listingdetails) {
      setdata({
        title: details.listingdetails.title,
        discription: details.listingdetails.description,
        status: details.listingdetails.status,
        rent: details.listingdetails.rent,
        slots: details.listingdetails.slots,
        guestLimit: details.listingdetails.guestLimit,
        zipcode: details.listingdetails.zipcode,
      });
      setlocationstring(details.listingdetails.address);
      setselectedcategory(details.listingdetails.category);
      setselectedeminity(
        details.listingdetails.amenities.map((item) => item.uuid)
      );
    }
  }, [details.listingdetails]);

  const deleteimage = (index) => {
    let newimage = gImages;
    newimage.splice(index, 1);
    setgimages([...newimage]);
  };

  const adddeletedimages = (item) => {
    const newset = del;
    newset.push(item);
    setdel([...newset]);
  };

  const removedeletedimages = (item) => {
    const newset = del;
    newset.splice(newset.indexOf(item), 1);
    setdel([...newset]);
  };

  const addamenity = (item) => {
    const newam = [...selectedamenity];
    if (!selectedamenity.includes(item)) {
      newam.push(item);
      setselectedeminity(newam);
    }
  };

  const delamenity = (item) => {
    const newam = [...selectedamenity];

    newam.splice(newam.indexOf(item), 1);
    setselectedeminity(newam);
  };

  const createlisting = () => {
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.discription);
    formdata.append("status", data.status);
    formdata.append("rent", data.rent);
    formdata.append("amenityIds", JSON.stringify(selectedamenity));
    gImages.map((item) => formdata.append("images", item));
    formdata.append(
      "latitude",
      locationstring === details.listingdetails.address
        ? details.listingdetails.coordinates.latitude
        : location.latitude
    );
    formdata.append(
      "longitude",
      locationstring === details.listingdetails.address
        ? details.listingdetails.coordinates.longitude
        : location.longitude
    );
    formdata.append(
      "zipcode",
      locationstring === details.listingdetails.address
        ? details.listingdetails.zipcode
        : location.zipcode
    );
    formdata.append("address", locationstring);
    formdata.append("guestLimit", JSON.stringify(data.guestLimit));
    formdata.append(
      "timezone",
      locationstring === details.listingdetails.address
        ? details.listingdetails.timezone
        : location.timezone.id
    );
    formdata.append("deleteImages", JSON.stringify(del));
    dispatch(updatelisting(formdata, id));
    history.push("/managelistings");
  };
  React.useEffect(() => {
    if (locationstring !== details.listingdetails?.address) {
      if (location.zipcode) setdata({ ...data, zipcode: location.zipcode });
      else setdata({ ...data, zipcode: "" });
    }
  }, [location.zipcode]);

  React.useEffect(() => {
    if (locationstring !== details?.listingdetails?.address) {
      if (locationstring !== "") dispatch(locationfind(locationstring));
      if (locationstring === "") dispatch(locationnull());
    }
  }, [locationstring]);

  return (
    <section>
      <div className="container d-flex flex-direction-column align-items-center justify-content-center">
        <div className="col-md-10 col-sm-12 col-md-offset-1 mob-padd-0">
          {/* General Information */}
          <div className="add-listing-box general-info mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <i className="ti-files theme-cl" />
              <h3>General Information</h3>
              <p>Write something general information about your listing</p>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                <div className="col-sm-6">
                  <label>Listing Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.title}
                    onChange={(e) => {
                      setdata({ ...data, title: e.target.value });
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Category</label>
                  <select
                    data-placeholder="Choose Category"
                    readOnly
                    value={selectedcategory.uuid}
                    onChange={(e) => {
                      setselectedcategory(
                        categories?.categories?.find((item, index) => {
                          if (e.target.value === item.uuid) return true;
                        })
                      );
                    }}
                    className="form-control chosen-select"
                    tabIndex={2}
                  >
                    {" "}
                    <option value={0}>Select</option>
                    {categories?.categories?.map((item) => {
                      return <option value={item.uuid}> {item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="col-sm-6" style={{ position: "relative" }}>
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={locationstring}
                    onChange={(e) => {
                      setlocationstring(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace") {
                        setdisplayauto(true);
                        dispatch(locationlltz());
                      }
                    }}
                  />
                  {locationstring !== "" && displayauto && (
                    <div
                      style={{
                        width: "90%",
                        minHeight: "50px",
                        position: "absolute",
                        zIndex: "100",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 15px lightgray",
                        padding: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: "5px", width: "100%" }}>
                        {location?.locationstring
                          ? location?.locationstring?.map((item) => {
                              return (
                                <div
                                  style={{
                                    padding: "5px",
                                    borderBottom: "0.5px solid lightgray",
                                    width: "100%",
                                    margin: "5px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    setlocationstring(item);
                                    setdisplayauto(false);
                                    dispatch(locationfindll(item));
                                  }}
                                >
                                  <label style={{ cursor: "pointer" }}>
                                    {item}
                                  </label>
                                </div>
                              );
                            })
                          : "loading"}
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-sm-6">
                  <label>Amount per hour</label>
                  <input
                    type="number"
                    className="form-control"
                    value={data.rent}
                    onChange={(e) => {
                      setdata({ ...data, rent: e.target.value });
                    }}
                  />
                </div>

                <div className="col-sm-6">
                  <label>Slots</label>
                  <input
                    disabled={!selectedcategory?.slots}
                    type="number"
                    className="form-control"
                    readOnly
                    onChange={(e) => {
                      setdata({ ...data, slots: e.target.value });
                    }}
                    value={data.slots > 0 && data.slots}
                    placeholder={
                      !selectedcategory?.slots &&
                      "Slots not available for this category"
                    }
                  />
                </div>

                <div className="col-sm-6">
                  <label>Adults</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setdata({
                        ...data,
                        guestLimit: {
                          ...data.guestLimit,
                          adults: e.target.value,
                        },
                      });
                    }}
                    value={data.guestLimit.adults}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Children</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setdata({
                        ...data,
                        guestLimit: {
                          ...data.guestLimit,
                          children: e.target.value,
                        },
                      });
                    }}
                    value={data.guestLimit.children}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Infants</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setdata({
                        ...data,
                        guestLimit: {
                          ...data.guestLimit,
                          infants: e.target.value,
                        },
                      });
                    }}
                    value={data.guestLimit.infants}
                  />
                </div>
                <div className="col-sm-6">
                  <label>Default Status</label>
                  <select
                    data-placeholder="Choose Category"
                    onChange={(e) => {
                      setdata({ ...data, status: e.target.value });
                    }}
                    value={data.status}
                    className="form-control chosen-select"
                    tabIndex={2}
                  >
                    <option value={1}>ACTIVE</option>
                    <option value={2}>INACTIVE</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label>Zipcode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.zipcode}
                    onChange={(e) => {
                      setdata({ ...data, zipcode: e.target.value });
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* End General Information */}
          {/* Full Information */}
          <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <i className="ti-write theme-cl" />
              <h3>Full Details</h3>
              <p>Write full detail information about listing Owner</p>
            </div>
            <div className="row mrg-r-10 mrg-l-10">
              <div className="col-sm-12">
                <label>Description</label>
                <textarea
                  className="h-500 form-control"
                  defaultValue={""}
                  value={data.discription}
                  onChange={(e) => {
                    setdata({ ...data, discription: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          {/* End Full Information */}

          {/* Add Gallery Information */}
          <Addgallery
            gImages={gImages}
            setgimages={setgimages}
            deleteimage={deleteimage}
            adddeletedimages={adddeletedimages}
            removedeletedimages={removedeletedimages}
            del={del}
            oldimages={details.listingdetails?.images}
          />

          {/* End Add Gallery Information */}
          {/* Amenities Information */}
          <div className="add-listing-box amenities mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <i className="ti-gift theme-cl" />
              <h3>Amenities</h3>
              <p>Write something general information about your listing</p>
            </div>
            <form>
              <div className="row mrg-r-10 mrg-l-10">
                {amenities?.amenity?.map((item, index) => {
                  return (
                    <div className="col-sm-4">
                      <span className="custom-checkbox d-block">
                        <input
                          type="checkbox"
                          id="select2"
                          style={{ backgroundColor: "red" }}
                          checked={selectedamenity.includes(item.uuid)}
                          onChange={(e) => {
                            e.target.checked
                              ? addamenity(item.uuid)
                              : delamenity(item.uuid);
                            // e.target.checked?setselectedeminity(item.uuid):setselectedeminity(null)
                          }}
                        />
                        <label htmlFor="select2" />
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
          {/* End Amenities Information */}
          <div className="text-center">
            <Button
              className="btn theme-btn"
              title="Submit Listing"
              onClick={createlisting}
            >
              Submit Listing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Listing);
