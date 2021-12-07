import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        bg="white"
        fixed="top"
        expand="lg"
        className="m-0 p-0"
        style={{ boxShadow: "0 0 8px 0 rgb(0 0 0 / 12%)" }}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="m-0 p-0"
          style={{ boxShadow: "none", border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0 ">
          <Nav className="mx-auto">
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

            <Nav.Link
              className=""
              href="#work"
              style={{
                color: "#798791",
                fontSize: "14px",
                marginLeft: "2rem",
                paddingLeft: "2rem",
              }}
            >
              How We Work
            </Nav.Link>
            <Nav.Link
              className=""
              href="#why-us"
              style={{
                color: "#798791",
                fontSize: "14px",
                marginLeft: "2rem",
                paddingLeft: "2rem",
              }}
            >
              Why Us?
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Modal />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
