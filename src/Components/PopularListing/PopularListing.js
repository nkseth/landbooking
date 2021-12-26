import * as React from "react";

import Card from "../Card/Card";
import {getlistingpublic,getlistingprivate} from '../../redux/slices/popularlisting'
import { useDispatch, useSelector } from "react-redux";
import {baseurl} from '../../config'
const PopularListing = () => {
  const dispatch=useDispatch()
  const data=useSelector((state) => state.popularlisting);
  const user=useSelector((state) => state.user);
  React.useEffect(()=>{
if(user.user) dispatch(getlistingprivate())
else dispatch(getlistingpublic())
  },[user.user])

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
        {data?.listing?.map((item, index) => {
          return (
            <div key={index}>
              <Card
                title={item.title}
                subTitle={item.address}
                imageSrc={`${baseurl}${item.images[0]}`}
                amount={item.rent}
                rating={item.rating}
                id={item.uuid}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularListing;
