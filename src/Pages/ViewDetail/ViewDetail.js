import React from "react";
import Bannerbg from "../../assets/title-bg.jpg";
import "./ViewDetail.css";
import { Rating, Grid, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from '@mui/icons-material/Star';
import {
  Location,
  Info,
  Amenities,
  Overview,
  Reviews,
  Gallery,
  Reservation,
} from "../../Components";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { viewdetailsprivate, viewdetailspublic,reviews } from "../../redux/slices/popularlisting";
const ViewDetail = () => {
const dispatch=useDispatch()
const data =useSelector((state) => state.popularlisting)
const user =useSelector((state) => state.user)
const {id}=useParams()
  console.log(id)

   React.useEffect(()=>{
     if(user.user) {dispatch(viewdetailsprivate(id));dispatch(reviews(id))}
    else dispatch(viewdetailspublic(id))
   
   },[user.user])
   console.log("thisdidid",data.listingdetails)
  return (
    <div id="listing" className="listing my-md-5 my-3">
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${Bannerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "60vh",
          width: "100vw",
          position: "relative",
          marginBottom: "3rem",
        }}
      >
        <div
          className="content-container d-flex justify-content-start justify-content-md-end align-items-md-end align-items-end p-2"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div className="banner-btns-container d-flex flex-md-row flex-column justify-content-center align-items-md-end align-items-start">
            <div
              className="location-container mx-2"
              style={{
                color: "white",
              }}
            >
              <p style={{maxWidth:"300px"}}>
                <LocationOnIcon />
                {data.listingdetails?.address}
              </p>
            </div>
            <div className="rating-container d-flex justify-content-md-center justify-content-end align-items-center mx-2">
              <Rating
                name="half-rating m-1"
               value={data.listingdetails?.rating}
                precision={1}
            
               readOnly
                style={{
                  color: "white",
                  padding: "0.8rem 1.4rem",
                   backgroundColor: "#1EFFAC",
                }}

                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <button className="short-list-btn d-flex justify-content-center m-1">
                <FavoriteBorderOutlinedIcon />
                <Typography className="short-list"> Short List</Typography>
              </button>
            </div>
          </div>
          <div
            className="owner-card-container d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "white",
              borderRadius: "50px",
              padding: 0,
              boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)",
              position: "absolute",
              left: 60,
              bottom: -40,
            }}
          >
            <div
              className="owner-img mr-2"
              style={{ width: "4.5rem", height: "4.5rem", borderRadius: "50%" }}
            >
              <img
                src="https://webdesign.riolabz.com/yardcan/html/assets/img/avatar.jpg"
                alt=""
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div
              className="name-container  mx-3"
              style={{ lineHeight: 0, color: "#334E6F",display: "flex",
              justifyContent: "center",alignItems: "center",flexDirection: "column"}}
            >
              <h4 style={{lineHeight: '15px',marginTop:'15px'}}>{data.listingdetails?.host?.name}</h4>
              <p style={{ color: "#1EFFAC",lineHeight: '10px' }}>Business Man</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid-container"
        style={{
          width: "100vw",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={11} md={6} classname="px-5">
            <Info data={data.listingdetails} reviewno={data.reviews}/>
            <Overview data={data.listingdetails?.description}/>
            <Amenities data={data.listingdetails?.amenities} />
            <Reviews data={data.reviews} />
          </Grid>
          <Grid item xs={11} md={3}>
            <Reservation data={data.listingdetails}/>
            <Gallery data={data.listingdetails?.images} />
            <Location  data={data.listingdetails?.address}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ViewDetail;
