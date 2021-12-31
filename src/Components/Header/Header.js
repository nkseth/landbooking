import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from './logoutbtn'
import { useSelector } from "react-redux";

const Header = (props) => {
  const data = useSelector((state) => state.user);
const [expanded,setexpaned]=React.useState(false)
  return (
    <>
      <Navbar
        bg="white"
        fixed="top"
        expand="lg"
        expanded={expanded}
        className="m-0 p-0"
        style={{ boxShadow: "0 0 8px 0 rgb(0 0 0 / 12%)" ,}}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="m-0 p-0"
          style={{ boxShadow: "none", border: "none"}}
          onClick={()=>setexpaned(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0 " >
          <Nav style={{width:'100%'}}  onClick={()=>{setexpaned(false)}}>
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
                How we Work?
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
          <div  onClick={()=>{setexpaned(false)}} >
            {data?.user?<Logout/>:<Modal />}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
