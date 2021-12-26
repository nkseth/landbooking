import React from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Listing.css";
import {getlistingpublic,getlistingprivate} from '../../redux/slices/popularlisting'
import { useSelector,useDispatch } from "react-redux";
import { baseurl } from "../../config";
import { withRouter } from "react-router-dom";
const Listing = ({history}) => {
  const dispatch=useDispatch()
  const data=useSelector((state) => state.popularlisting);
  const user=useSelector((state) => state.user);
  
  React.useEffect(()=>{
    if(user.user){
      if(!user.user.user.emailVerified && !user.user.user.phoneVerified) history.push('/editprofile')
    }
if(user.user) dispatch(getlistingprivate())

dispatch(getlistingpublic())
  },[user.user])



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
          height: "40vh",
          width: "100vw",
          position: "relative",
          marginBottom: "12rem",
        }}
      >
        <div
          className="content-container d-flex justify-content-center align-items-md-center align-items-top p-5"
          style={{
            backgroundColor: "rgba(58, 87, 135, 0.45)",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="text-container text-white text-center p-3">
            <h1 style={{ fontSize: "3rem",color: "#FFFFFF" }}>LISTING</h1>
            <p style={{color:'white'}}>
              <span style={{ color: "#1EFFAC" }}>HOME</span>{" "}
              <ArrowForwardIosIcon sx={{ fontSize: "15px",color: "#FFFFFF"}} />
              LISTING
            </p>
          </div>
          <div className="formInput-container ">
            <div className="text-center mb-2" style={{ color: "#334E6F" }}>
              <h3>Search For Listing</h3>
            </div>
            <Form className="d-flex justify-content-center align-items-center flex-md-row flex-column">
              <Form.Control
                size="lg"
                type="dropdown"
                placeholder="Location.."
                className="m-2 w-90 p-3 form-input"
                id="form-input"
              />
              <Form.Control
                size="lg"
                type="dropdown"
                placeholder="Choose Category"
                className="m-2 w-90 p-3 form-input"
                id="form-input"
              />
              <Button
                variant="btn "
                className="m-2 button"
                style={{
                  padding: "14px 50px",
                  backgroundColor: "#1EFFAC",
                  color: "white",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                Search
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <div className="cards-container d-flex justify-content-center flex-wrap my-5">
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
      <div className="d-flex justify-content-center">
        <Pagination
          count={5}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default withRouter(Listing);
