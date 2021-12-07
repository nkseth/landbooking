import React from "react";

const Overview = () => {
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
          To Give An Overview Of The Yard The Yard Is 900sq Ft In Length With
          Feathurslike Pool, Grill Machine And High Ambience. I Have To Say This
          Is Very Good For Night Party And Birthday Programs.
        </p>
      </div>
    </div>
  );
};

export default Overview;
