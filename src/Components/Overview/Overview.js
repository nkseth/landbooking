import React from "react";

const Overview = ({data}) => {
  return (
    <div
      className="overview-container my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div
        className="heading-container p-3"
        style={{ color: "#334E6F", borderBottom: "1px solid #eaeff5" }}
      >
        <h5>Overview</h5>
      </div>
      <div
        className="overview p-3"
        style={{ color: "#334E6F", fontSize: "14px" }}
      >
        <p>
         {data}
        </p>
      </div>
    </div>
  );
};

export default Overview;
