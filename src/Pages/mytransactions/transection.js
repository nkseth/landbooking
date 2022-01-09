import moment from "moment";
import React from "react";

import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { baseurl } from "../../config";
import {
  removeFavourites,
  viewFavourites,
} from "../../redux/slices/popularlisting";

const Venue = ({ data, history, deleteone, index }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="small-listing-box light-gray">
        <div className="small-list-detail mx-2">
          <h4>{data.uuid}</h4>
          <p>{moment(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}</p>
        </div>
        <div className="small-list-action light d-flex flex-wrap justify-content-center">
        <div style={{ marginRight: "10px" }}>
            <p style={{ marginBottom: 0 }}>INITIALIZATION</p>
            <h6>
            {data.initialization === 1
                ? "PENDING"
                : data.initialization === 2
                ? "FAILED"
                : data.initialization === 3 
                ? "CANCELLED" 
                :data.initialization === 4 &&  "SUCCEEDED"
                }
            </h6>
          </div>
          <div style={{ marginRight: "10px" }}>
            <p style={{ marginBottom: 0 }}>Type</p>
            <h6>
              {data.type === 1
                ? "CHARGE"
                : data.type === 2
                ? "REFUND"
                : data.type === 3 && "PAYOUT"}
            </h6>
          </div>
          <div style={{ marginRight: "10px" }}>
            <p style={{ marginBottom: 0 }}>Status</p>
            <h6>
              {data.status === 1
                ? "PENDING"
                : data.status === 2
                ? "FAILED"
                : data.status === 3 &&  "SUCCEEDED"
                }
            </h6>
          </div>
          <div
            className="light-gray-btn btn-square"
            style={{ width: "150px" }}
            data-placement="top"
            data-toggle="tooltip"
            title="Edit Item"
          >
            <i className="ti-pencil" />
            Amount:{data.amount}
          </div>

          
        </div>
      </div>
    </li>
  );
};
export default withRouter(Venue);
