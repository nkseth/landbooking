import React from "react";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import { Typography } from "@mui/material";
import {baseurl} from"../../config" 
const Gallery = ({data}) => {
  
  return (
    <div
      className="gallery-container p-2 my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div className="heading-container " style={{ color: "#334E6F" }}>
        <div
          className="d-flex align-items-center p-2 mb-4"
          style={{ borderBottom: "1px solid #eaeff5" }}
        >
          <CollectionsOutlinedIcon
            style={{ fontSize: "24px", fontWeight: 300 }}
          />
          <Typography varient="h3">
            <b>Gallery</b>{" "}
          </Typography>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5">
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={`${baseurl}${item}`}
                  style={{ width: "90%", borderRadius: "5px" ,maxWidth:'170px'}}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
