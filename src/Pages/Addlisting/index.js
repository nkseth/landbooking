import React from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Listing = () => {
  const ListingData = [
    {
      title: "Yard Can in NewYork",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
    {
      title: "Tennis Court",
      imageSrc:
        "https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
    {
      title: "Basket Ball Court",
      imageSrc:
        "https://www.versacourt.com/cmss_files/photogallery/structure/Residential_Basketball_Courts/image57726.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
    {
      title: "Yard Can in NewYork",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
    {
      title: "Tennis Court",
      imageSrc:
        "https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
    {
      title: "Basket Ball Court",
      imageSrc:
        "https://www.versacourt.com/cmss_files/photogallery/structure/Residential_Basketball_Courts/image57726.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
  ];
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
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Category</label>
                <select data-placeholder="Choose Category" className="form-control chosen-select" tabIndex={2}>	<option>Select</option>
                  <option>yard</option>
                  <option>Swimming pool</option>
                  <option>yard</option>
                  <option>Parking spaces</option>
                  <option>Agricultural land</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Amount per hour</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Slots</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Adults</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Children</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Infants</label>
                <input type="text" className="form-control" />
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
              <textarea className="h-500 form-control" defaultValue={""} />
            </div>
          </div>
        </div>
        {/* End Full Information */}
        {/* Add Gallery Information */}
        <div className="add-listing-box full-detail mrg-bot-25 padd-bot-30 padd-top-25">
          <div className="listing-box-header">
            <i className="ti-gallery theme-cl" />
            <h3>Add Gallery</h3>
            <p>Write full detail information about listing Owner</p>
          </div>
          <form action="https://codeminifier.com/upload-target" className="dropzone dz-clickable primary-dropzone">
            <div className="dz-default dz-message">
              <i className="ti-gallery" />
              <span>Drag &amp; Drop To Change Logo</span>
            </div>
          </form>
        </div>
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
              <div className="col-sm-4">
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select1" />
                  <label htmlFor="select1" />
                  Grill Machine
                </span>
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select2" />
                  <label htmlFor="select2" />
                  Swimming Pool
                </span>
              </div>
              <div className="col-sm-4">
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select8" />
                  <label htmlFor="select8" />
                  Street parking  
                </span>
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select10" />
                  <label htmlFor="select10" />
                  Attached garage
                </span>
              </div>
              <div className="col-sm-4">
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select15" />
                  <label htmlFor="select15" />
                  Electricity   
                </span>
                <span className="custom-checkbox d-block">
                  <input type="checkbox" id="select5" />
                  <label htmlFor="select5" />
                  Security cameras  
                </span>
              </div>
            </div>
          </form>
        </div>
        {/* End Amenities Information */}
        <div className="text-center">
          <a href="#" className="btn theme-btn" title="Submit Listing">Submit Listing</a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Listing;
