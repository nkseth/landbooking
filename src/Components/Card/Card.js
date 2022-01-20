import React from "react";
import { Rating } from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addfavour, viewFavourites } from "../../redux/slices/popularlisting";
import { useDispatch } from "react-redux";
import { FavoriteBorder, FavoriteSharp } from "@mui/icons-material";
const Cards = ({ title, subTitle, amount, imageSrc, rating, id ,favour}) => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-4 col-sm-6">
      <div className="listing-shot grid-style">
        <div className="listing-shot-img">
          <img src={imageSrc} className="img-responsive mw-100" alt="" />
          <span className="listing-price">${amount}/hr</span>
        </div>
        <div className="listing-shot-caption">
          <h4> {title}</h4>
          <p style={{minHeight:'50px'}}className="listing-location">{subTitle}</p>
          <span
            className="like-listing style-2 "
            style={{
              backgroundColor: "#1EFFAC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
            onClick={() => {
              dispatch(addfavour(id));
              setTimeout(() =>{
                dispatch(viewFavourites());
              },1000)
            }}
          >
            { favour?
            <FavoriteSharp style={{ color:"red" }} />
            :<FavoriteBorderOutlinedIcon style={{ color:"white" }} />
              }
          </span>
        </div>
        <div className="listing-shot-info rating">
          <div className="row extra">
            <div className="col-md-7 col-sm-7 col-xs-6 d-flex align-items-center">
              {parseFloat(rating).toFixed(1)}
              <Rating
                name="half-rating"
                value={rating}
                readOnly
                size="small"
                style={{ marginleft: "10" }}
                precision={0.5}
              />
            </div>
            <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
              <Link
                className="detail-link"
                to={`./view-detail/${id}`}
                style={{ color: "#1EFFAC", textDecoration: "none" }}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

