import React, { useState } from "react";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
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
            <Button
              variant="btn"
              style={{
                height: "100%",
                padding: "12px",
                backgroundColor: "#1EFFAC",
                color: "white",
                boxShadow: "none",
              }}
              onClick={() => setShow(true)}
            >
              <PersonOutlineIcon />
              Login/Signup
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  LogIn Your Account
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  className="heading-container text-center"
                  style={{ color: "#334E6F" }}
                >
                  <h1>
                    Welcome <span style={{ color: "#1EFFAC" }}>Back!</span>
                  </h1>
                </div>
                <div className="py-3 px-3">
                  <div className="my-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="username...."
                    />
                  </div>
                  <div className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      size="lg"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                  <div className="my-2">
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Keep me SIgned in"
                    />
                  </div>
                  <div className="mt-5 d-flex justify-content-center">
                    <Button
                      variant="btn"
                      style={{
                        height: "100%",
                        padding: "1rem 4rem",
                        backgroundColor: "#1EFFAC",
                        color: "white",
                        boxShadow: "none",
                        borderRadius: "2rem",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
