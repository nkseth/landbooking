import React from "react";
import Bookingmodal from "../../Components/Modal/bookings";
import { FaPencilAlt, FaTimesCircle } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import Reviewmodal from "../../Components/Modal/review";
import { cancelReservation } from "../../redux/slices/reservations";
import { useDispatch } from "react-redux";
const Booking = ({ data, history }) => {
  const [show, setshow] = React.useState(false);
  const [rshow, setrshow] = React.useState(false);
  const close = () => {
    setshow(false);
  };
  const rclose = () => {
    setrshow(false);
  };
 const  dispatch=useDispatch()

  return (
    <li>
      <Bookingmodal show={show} close={close} data={data} />
      <Reviewmodal show={rshow} close={rclose} data={data} />
      <div className="small-listing-box light-gray">
        <div
          className="small-list-img d-flex align-items-center "
          style={{ width: 100 }}
        >
          <img
            src={data.venue.images.length > 0 ? data.venue.images : ""}
            className="w-100"
            alt=""
          />
        </div>
        <div className="small-list-detail">
          <h4>{data.venue.title}</h4>
          <p>{data.venue.category ? data.venue.category.name : "Category"}</p>
        </div>
        <div className="small-list-action light d-flex flex-wrap justify-content-center">
        {data.status ===2 && 
          <div
            onClick={() => {
              setrshow(true);
            }}
            className="light-gray-btn btn-square"
            style={{ width: "150px" }}
            data-placement="top"
            data-toggle="tooltip"
            title="Add a Review"
          >
            <i className="ti-pencil" />
            Add/View Review
          </div>}
          <div style={{ marginRight: "10px" }}>
            <p style={{ marginBottom: 0 }}>status</p>
            <h6>
              {data.status === 2
                ? "CONFIRMED"
                : data.status === 1
                ? "INPROCESS"
                : data.status === 3
                ? "CANCELLED"
                : data.status === 4 && "COMPLETED"}
            </h6>
          </div>

          <div
            onClick={() => {
              setshow(true);
            }}
            className="light-gray-btn btn-square"
            style={{ width: "150px" }}
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Item"
          >
            <i className="ti-pencil" />
            View Details
          </div>
          <div
            className="light-gray-btn btn-square"
            data-placement="top"
            data-toggle="tooltip"
            title="Reschedule"
            onClick={() => {
              history.push(
                `/view-detail/${data.venue.uuid}?reservationid=${data.uuid}`
              );
            }}
          >
            <FaPencilAlt style={{ fontSize: 16, margin: 5 }} />
          </div>
          {data.status !== 3 && data.status !== 4 ? (
            <div
              className="theme-btn btn-square"
              data-toggle="tooltip"
              title="Cancel"
              onClick={()=>{dispatch(cancelReservation(data.uuid))}}
            >
              <i className="ti-trash" />{" "}
              <FaTimesCircle style={{ fontSize: 16, margin: 5 }} />
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
};
export default withRouter(Booking);
