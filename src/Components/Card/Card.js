import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addfavour } from "../../redux/slices/popularlisting";
import { useDispatch } from "react-redux";
const Cards = ({ title, subTitle, amount, imageSrc,rating,id }) => {
  const dispatch=useDispatch()
  return (
 
   
    <div className="col-md-4 col-sm-6">
    <div className="listing-shot grid-style">
      <div className="listing-shot-img">
        <img src={imageSrc} className="img-responsive" alt="" />
        <span className="listing-price">${amount}/hr</span>
      </div>
      <div className="listing-shot-caption">
        <h4> {title}</h4>
        <p className="listing-location">{subTitle}</p>
        <span className="like-listing style-2 " style={{backgroundColor: "#1EFFAC" ,padding:'8px',borderRadius:'50%'}} 
        
        onClick={()=>{dispatch(addfavour(id))}}>
<FavoriteBorderOutlinedIcon style={{ color: "white" }} />    
        </span>
      </div>
      <div className="listing-shot-info rating">
        <div className="row extra">
          <div className="col-md-7 col-sm-7 col-xs-6 d-flex align-items-center">
            {parseFloat(rating).toFixed(1)}
            <Rating name="half-rating" value={rating} readOnly size="small" style={{marginleft: '10'}} precision={0.5}/>
           </div>
          <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
            
            <Link className="detail-link"
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


// <div className="card mx-lg-3 my-3 px-2" style={{ border: "none" }}>
// <Card
//   sx={{
//     boxShadow: " 0px 10px 10px 1px rgb(71 85 95 / 8%)",

//   }}
//   className="card-container"
// >
//   <div className="p-0 position-relative">
//     <CardMedia
//       component="img"
//       sx={{ width: "100%", height: "25vh", objectFit: "cover" }}
//       image={imageSrc}
//       className="listing-shot-img"
//       alt="green iguana"
//     />
//     <div 
//       className="d-flex justify-content-center align-items-center"
//       style={{
//         backgroundColor: "#1EFFAC",
//         height: "3rem",
//         width: "3rem",
//         borderRadius: "50%",
//         position: "absolute",
//         bottom: "-1.5rem",
//         right: "1rem",
//         cursor: "pointer"
//       }}
//       onClick={()=>{dispatch(addfavour(id))}}
//     >
//       <FavoriteBorderOutlinedIcon style={{ color: "white" }} />
//     </div>
//     <div
//       className="d-flex justify-content-center align-items-bottom p-1"
//       style={{
//         backgroundColor: "#11111150",
//         borderRadius: "2px",
//         position: "absolute",
//         bottom: "0.5rem",
//         left: "0.5rem",
//         color: "white",
//         fontSize: "16px",
//       }}
//     >
//       <Typography variant="caption">${amount}/hr</Typography>
//     </div>
//   </div>
//   <CardContent sx={{ color: "#334E6F", padding: 1 }}>
//     <Typography gutterBottom variant="h6" component="div">
//       {title}
//     </Typography>
//     <Typography variant="body2">{subTitle}</Typography>
//   </CardContent>
//   <CardActions className="d-flex justify-content-between border-top p-1 mt-2">
//     <div style={{display: 'flex',alignItems:'center'}}>
//       <p style={{marginBottom:0,marginRight:"3px",color:'gray'}}>{parseFloat(rating).toFixed(1)}</p>
//     <Rating name="half-rating" value={rating} readOnly size={"small"}  precision={0.5} />
//     </div>
//     <Button size="small">
//       <Link
//         to={`./view-detail/${id}`}
//         style={{ color: "#1EFFAC", textDecoration: "none" }}
//       >
//         View Details
//       </Link>
//     </Button>
//   </CardActions>
// </Card>
// </div>