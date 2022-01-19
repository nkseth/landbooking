import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./logoutbtn";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import Logo from "../../assets/yardcanlogo.png";
import { logout } from "../../redux/slices/user";
import { Hidden } from "@mui/material";
const Header = (props) => {
  const data = useSelector((state) => state.user);
  const state = useSelector((state) => state.user);
  const [expanded, setexpaned] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        bg="white"
        fixed="top"
        expand="lg"
        expanded={expanded}
        className="m-0 p-0"
        style={{ boxShadow: "0 0 8px 0 rgb(0 0 0 / 12%)" ,
        padding:'0',height:'65px'
        }}
      >
        <div
          style={{
            margin: "0",
         
            marginLeft: "10px",
            marginTop: "2px",
          }}
        >
          <img src={Logo} alt={"logo"} style={{ maxHeight: "63px" }} />
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="m-0 p-0"
          style={{ boxShadow: "none", border: "none" }}
          onClick={() => setexpaned(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0 bg-white">
          <Nav
          className="justify-content-md-center"
            style={{ width: "100%", display: "flex",
             justifyContent: "flex-start",flexWrap:"wrap" }}
            onClick={() => {
              setexpaned(false);
            }}
          >
            <Link to="/" className="link">
              <Nav.Link
                className=" link"
                href="/listing"
                style={{
                  color: "#798791",
                  fontSize: "14px",
                  marginLeft: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                Home
              </Nav.Link>
            </Link>
            <Link to="/listing" className="link">
              <Nav.Link
                className=" link"
                href="/listing"
                style={{
                  color: "#798791",
                  fontSize: "14px",
                  marginLeft: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                Listing
              </Nav.Link>
            </Link>
            <Link to="/" className="link">
              <Nav.Link
                className=" link"
                href="/listing"
                
                style={{
                  color: "#798791",
                  fontSize: "14px",
                  marginLeft: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                How We Work?
              </Nav.Link>
            </Link>
            <Link to="/" className="link">
              <Nav.Link
                className=" link"
                href="/listing"
                style={{
                  color: "#798791",
                  fontSize: "14px",
                  marginLeft: "2rem",
                  paddingLeft: "2rem",
                }}
              >
                Why Us?
              </Nav.Link>
            </Link>
            
            
           

          </Nav>
          <Hidden mdUp>
          <div style={{padding:'10px'}}>
          {state?.user?.user?.host &&<Accordion style={{width:'100%'}}>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Seller Tools</Accordion.Header>  
              <Accordion.Body style={{display:'flex',flexDirection:'column'}}
                onClick={() => {
                  setexpaned(false);
                }}
              >
               
              <Link
                style={{
                  padding: "10px",
                  width: "100%",
                  borderBottom: "1px solid #eeeeee",
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "left",
                }}
                to="/addlisting"
              >
                Add Listing
              </Link>   
              <Link
                className="link"
                style={{
                  padding: "10px",
                  width: "100%",
                  borderBottom: "1px solid #eeeeee",
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "left",
                }}
                to="/managelistings"
              >
                Manage Listing
              </Link>
              <Link
              className="link"
              style={{
                padding: "10px",
                width: "100%",
                borderBottom: "1px solid #eeeeee",
                fontWeight: "bold",
                color: "gray",
                textAlign: "left",
              }}
              to="/mytransactions/seller"
            >
              Transactions
            </Link>
           
            </Accordion.Body>
              </Accordion.Item>
            

  </Accordion>}

 

        </div>
        </Hidden>
        <Hidden mdUp>
          <div style={{padding:'10px'}}>
          {state?.user?.user?.host && <Accordion style={{width:'100%'}}>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Customer Tools</Accordion.Header>  
              <Accordion.Body style={{display:'flex',flexDirection:'column'}}
                onClick={() => {
                  setexpaned(false);
                }}
              >
              <Link
              className="link"
              style={{
                padding: "10px",
                width: "100%",
                borderBottom: "1px solid #eeeeee",
                fontWeight: "bold",
                color: "gray",
                textAlign: "left",
              }}
              to="/mybookings"
            >
              My Bookings
            </Link>
            <Link
              className="link"
              style={{
                padding: "10px",
                width: "100%",
                borderBottom: "1px solid #eeeeee",
                fontWeight: "bold",
                color: "gray",
                textAlign: "left",
              }}
              to="/mytransactions/customer"
            >
              My Transactions
            </Link>
            <Link
              className="link"
              style={{
                padding: "10px",
                width: "100%",
                borderBottom: "1px solid #eeeeee",
                fontWeight: "bold",
                color: "gray",
                textAlign: "left",
              }}
              to="/myfavourite"
            >
              My Favourites
            </Link>
            <Link
              className="link"
              style={{
                padding: "10px",
                width: "100%",
                fontWeight: "bold",
                color: "gray",
                textAlign: "left",
                borderBottom: "1px solid #eeeeee",
              }}
              to="/editprofile"
            >
              Profile Edit
            </Link>

            <div
              className="link"
              onClick={() => {
                dispatch(logout(state.user.tokens.access));
              }}
              style={{
                padding: "10px",
                width: "100%",
                fontWeight: "bold",
                textAlign: "left",
                color: "gray",
                cursor: "pointer",
              }}
              to="/addlisting"
            >
              Logout
            </div>
        
            </Accordion.Body>
              </Accordion.Item>
            

  </Accordion>}

        </div>
        </Hidden>
          <div
           
            style={{padding:'0px',margin:0,height:'inherit' }}
          >
            {data?.user ? <Logout setexpand={setexpaned} /> : <Modal />}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
