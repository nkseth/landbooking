import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./BookCard.css";

const BookCard = ({data}) => {
  return (
    <div className="card  " style={{ border: "none",background: "red",width:'100%'}}>
        {console.log(data)}
      <Card
        sx={{
          boxShadow: " 0px 0px 10px 1px rgb(71 85 95 / 8%)",width: "100%"
        }}
        className=""
      >
       
        <CardContent sx={{ color: "#334E6F", padding: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2">{data.address}</Typography>
        </CardContent>

        <CardContent sx={{ color: "#334E6F", padding: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="mb-3"
          >
            Booking Summary
          </Typography>
          <div className="date-timing my-2">
            <Typography
              variant="body2"
              className="mb-2"
              style={{ fontWeight: "bold" }}
            >
               Dates
            </Typography>
            <div className="p-2 d-flex">
             

 <div className="d-flex justify-content-between mb-2 w-50 ">
   <Typography variant="body2">Appearing</Typography>
   
 </div>
 <div className="d-flex justify-content-end mb-2 w-50">
   <Typography variant="body2">Timing</Typography>
  
 </div> 
 </div>
            {data.schedules?.map((item)=>{
 return <div className="p-2  d-flex">
 <div className="d-flex justify-content-between mb-1 w-50 ">
   
   <Typography variant="body2">{item.date}</Typography>
 </div>
 <div className="d-flex justify-content-end mb-1 w-50">
   <Typography variant="body2">{item.intervals.map((item)=>`${item} `)}</Typography>
 </div>
 
</div>
            })}
           
          </div>
          <div className="stay-charges my-2">
            <Typography
              variant="body2"
              className="mb-2"
              style={{ fontWeight: "bold" }}
            >
              Details
            </Typography>
            <div className="p-2">
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Slots</Typography>
                <Typography variant="body2">{data?.slots?.map((item)=>`${item} `)}</Typography>
              </div>
              <div className="d-flex justify-content-center mb-4 flex-column">
                <Typography variant="body2 text-center mb-2">Guest List</Typography>
               <div className="d-flex justify-content-around">
               <Typography variant="body2">adults:{data?.guestList.adults}</Typography>
               <Typography variant="body2">Infants:{data?.guestList.infants}</Typography>
               <Typography variant="body2">Children:{data?.guestList.children}</Typography>
               </div>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <Typography variant="body2">Total Cost</Typography>
                <Typography variant="body2">${data?.payment?.amount}</Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCard;
