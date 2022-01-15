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
        style={{ boxShadow: "0 0 8px 0 rgb(0 0 0 / 12%)" }}
      >
        <div
          style={{
            margin: "0",
            maxHeight: "65px",
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
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0 ">
          <Nav
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
        
          <div
            onClick={() => {
              setexpaned(false);
            }}
            style={{ minHeight: "100%" }}
          >
            {data?.user ? <Logout /> : <Modal />}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
