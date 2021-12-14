import * as React from "react";

import Card from "../Card/Card";
import {getlisting} from '../../redux/slices/popularlisting'
import { useDispatch, useSelector } from "react-redux";

const PopularListing = () => {
  const dispatch=useDispatch()
  const data=useSelector((state) => state.popularlisting);
  React.useEffect(()=>{
dispatch(getlisting())
  },[])
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
  ];
  return (
    <div className="popular-listing " style={{ margin: "5rem 0" }}>
      {console.log(data)}
      <div
        className="heading-container text-center "
        style={{ color: "#334E6F" }}
      >
        <h1>
          Popular <span style={{ color: "#1EFFAC" }}>Listng</span>
        </h1>
        <p>Check our most Popular Listing</p>
      </div>
      <div className="cards-container d-flex justify-content-center flex-wrap">
        {ListingData.map((item, index) => {
          return (
            <div key={index}>
              <Card
                title={item.title}
                subTitle={item.location}
                imageSrc={item.imageSrc}
                amount={item.amount}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularListing;
