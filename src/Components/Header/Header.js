import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="white" fixed="top" expand="lg" className="m-0 p-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-0 p-0" />
        <Navbar.Collapse id="basic-navbar-nav" className="m-0 p-0">
          <Nav className="mx-auto">
            <Nav.Link className="mx--3" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="#listing">
              Listing
            </Nav.Link>
            <Nav.Link className="mx-3" href="#work">
              How We Work
            </Nav.Link>
            <Nav.Link className="mx-3" href="#why-us">
              Why Us?
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="btn "
              style={{
                height: "100%",
                padding: "12px",
                backgroundColor: "#1EFFAC",
                color: "white",
              }}
            >
              <PersonOutlineIcon />
              Login/Signup
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
