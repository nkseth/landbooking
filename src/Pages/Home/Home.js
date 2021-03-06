import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  MainBanner,
  PopularListing,
  BookingSteps,
  Testimonials,
} from "../../Components";


const Home = ({history}) => {
const user=useSelector((state) => state.user)


React.useEffect(()=>{
if(user.user){
  if(!user.user.user.emailVerified || !user.user.user.phoneVerified) history.push('/editprofile')
}
},[user.user])


  return (
    
    <div style={{maxWidth:"100vw"}}>
      <MainBanner />
      <PopularListing />
      <BookingSteps />
      <Testimonials />
    </div>
  );
};

export default withRouter(Home);
