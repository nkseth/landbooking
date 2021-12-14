import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import "./MainBanner.css";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../redux/slices/user'
const MainBanner = () => {
  const dispatch=useDispatch()
  React.useEffect(()=>{
    // dispatch(login())
  },[])

  const data = useSelector((state) => state.user);

  React.useEffect(()=>{
   console.log(data)
  },[data])
 
  return (
    <div
      className="home-banner"
      style={{
        backgroundImage: `url(${Bannerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        maxWidth:'100vw',
        color:'white',
        marginTop: "0px",
        padding: "0px"
      }}
    >
      <div
        className="content-container p-md-2 "
        style={{
          backgroundColor: "rgba(58, 87, 135, 0.45)",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
         
        
        }}
      >
        <div className="text-container text-white text-center  ">
          <h1
            style={{
              fontWeight: 550,
              letterSpacing: 1.3,
              wordSpacing: 3,
              color: 'white',
              marginTop:'20px',
              marginTop:'-100px'
            }}
          >
            Looking to rent a Yard, parking space or Tennis Court for an Hour or
            more!!
          </h1>
          <p
            style={{
              color: "#DFE1E7",
            }}
          >
            You Are At The Right Place. Lets Go Ahead And Grab The Best Deal
          </p>
        </div>
        <div className="form-container container d-flex justify-content-center">
          <Form className="d-flex flex-md-row flex-column form-inputs">
            <div className="d-flex justify-content-center align-items-center bg-white w-100 py-0 px-2 my-1">
              <LocationOnOutlinedIcon
                className="d-flex justify-content-end"
                style={{ color: "#909DB4" }}
              />
              <Form.Control
                style={{
                  outline: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                  fontSize: "15px",
                  border: "none",
                }}
                size="lg"
                type="location"
                placeholder="Location"
                className="py-md-4 py-2 px-0"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center bg-white border-start my-1 w-100 py-0 px-2 p-0">
              <FilterNoneOutlinedIcon
                fontSize="small"
                className="d-flex justify-content-end"
                style={{ color: "#909DB4" }}
              />
              <Form.Select
                style={{
                  color: "#909DB4",
                  outline: "none",
                  borderRadius: "0",
                  boxShadow: "none",
                  fontSize: "15px",
                  border: "none",
                }}
                size="lg"
                type="location"
                placeholder="Choose Category"
                className="py-md-4 py-2 px-0 "
              >
                <option>Choose Category</option>
                <option>Food and Resturant</option>
                <option>Shop and Education</option>
                <option>Education</option>
                <option>Business</option>
              </Form.Select>
            </div>
            <Button
              variant="btn"
              style={{
                backgroundColor: "#1EFFAC",
                color: "white",
                borderRadius: 0,
                boxShadow: "none",
                fontSize: "22px",
              }}
              className="button px-5 p-1 my-1"
              onClick={login}
            >
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
