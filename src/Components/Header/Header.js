import React from "react";
import "./Header.css";
import Modal from "../Modal/Modal";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="white" fixed="top" expand="lg" className="m-0 p-0">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="m-0 p-0"
          style={{ boxShadow: "none", border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0">
          <Nav className="mx-auto">
            <Link to="/" className="link">
              <Nav.Link className="mx--3 link" href="/listing">
                Home
              </Nav.Link>
            </Link>
            <Link to="/listing" className="link">
              <Nav.Link className="mx-3 link" href="/listing">
                Listing
              </Nav.Link>
            </Link>

            <Nav.Link className="mx-3" href="#work">
              How We Work
            </Nav.Link>
            <Nav.Link className="mx-3" href="#why-us">
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
