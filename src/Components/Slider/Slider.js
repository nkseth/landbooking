import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Slider = ({ children }) => {
  return (
    <Flickity
      options={{
        pageDots: false,
        wrapAround: true,
      }}
    >
      {children}
    </Flickity>
  );
};

export default Slider;
