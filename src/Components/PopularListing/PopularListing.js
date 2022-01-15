import * as React from "react";

import Card from "../Card/Card";
import {
  getlistingpublic,
  getlistingprivate,
} from "../../redux/slices/popularlisting";
import { useDispatch, useSelector } from "react-redux";
import { baseurl } from "../../config";
const PopularListing = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.popularlisting);
  const user = useSelector((state) => state.user);
  const [queryperams, setqueryperams] = React.useState({
    search: null,
    limit: 6,
    page: 1,
    categoryId: null,
    coordinateRange: null,
    zipcode: null,
  });

  React.useEffect(() => {
    if (user.user) {
      if (user.user.user.emailVerified && user.user.user.phoneVerified)
        dispatch(getlistingprivate(queryperams));
    } else dispatch(getlistingpublic(queryperams));
  }, []);

  return (
    <div className="popular-listing " style={{ margin: "5rem 0" }}>
      {console.log(data)}
      <div
        className="heading-container text-center "
        style={{ color: "#334E6F" }}
      >
        <h1>
          Popular <span style={{ color: "#1EFFAC" }}>Listing</span>
        </h1>
        <p>Check our most Popular Listing</p>
      </div>
      <div className="row d-flex justify-content-center flex-row p-2 mx-md-5 px-md-5">
        {data?.listing?.map((item, index) => {
          if (user.user) {
            if (item.host.userId !== user.user.user.uuid) {
              return (
                <Card
                  title={item.title}
                  subTitle={item.address}
                  imageSrc={`${baseurl}${item.images[0]}`}
                  amount={item.rent}
                  rating={item.rating}
                  id={item.uuid}
                />
              );
            }
          } else {
            return (
              <Card
                title={item.title}
                subTitle={item.address}
                imageSrc={`${baseurl}${item.images[0]}`}
                amount={item.rent}
                rating={item.rating}
                id={item.uuid}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default PopularListing;
