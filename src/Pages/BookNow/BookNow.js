import React from "react";
import { Grid,Box } from "@mui/material";
import { BookCard, PaymentForm } from "../../Components";
import { useSelector } from "react-redux";
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { baseurl } from "../../config";
const BookNow = ({history}) => {
  const [data,setdata]=React.useState(null)
  const user= useSelector((state) => state.user)
  React.useEffect(()=>{
    if(user.user){
      if(!user.user.user.emailVerified || !user.user.user.phoneVerified) history.push('/editprofile')
    }
  },[user.user])
  


  const CardData = [
    {
      title: "Yardcan",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
  ];
  return (
 
      <Grid
        container
        
        mt={6}
justifyContent='center'

        sx={{ display: "flex", justifyContent: "center" ,width: "100%",}}
      >
           {console.log(data)}
        <Grid  container style={{}} justifyContent="center">
        <Grid item xs={11} md={6} container justifyContent="center">
          <PaymentForm />
        </Grid>
        <Grid item xs={11} md={3} container  justifyContent="center" >
          <Box style={{maxWidth:'80%',}}>
          {CardData.map((item, index) => {
            return (
              <BookCard
                title={item.title}
                subTitle={item.location}
                amount={item.amount}
                imageSrc={item.imageSrc}
              />
            );
          })}
          </Box>
        </Grid>
        </Grid>
      </Grid>
 
  );
};

export default BookNow;
