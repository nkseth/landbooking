import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Login from "../Modal/Modal";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Signup = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="btn"
        style={{
          height: "100%",
          padding: "17px 50px",
          backgroundColor: "#1EFFAC",
          color: "white",
          boxShadow: "none",
          fontSize: "14px",
          borderRadius: 0,
        }}
        onClick={() => setShow(true)}
      >
        <PersonOutlineIcon style={{ color: "#FFC8B8" }} />
        Login/Signup
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-150w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
            LogIn Your Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="heading-container text-center"
            style={{ color: "#334E6F" }}
          >
            <h1>
              Hi Mate!<span style={{ color: "#1EFFAC" }}> How are you?</span>
            </h1>
          </div>
          <div className="py-4 px-3">
            <div className="my-2">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                User Name
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="username"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="my-2">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                Password
              </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="********"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="my-2">
              <FormControlLabel
                control={
                  <Checkbox defaultChecked style={{ color: "#1EFFAC" }} />
                }
                label="Keep me Signed in"
              />
            </div>
            <div className="mt-5 d-flex justify-content-center mb-2">
              <Button
                variant="btn"
                style={{
                  height: "100%",
                  padding: "0.8rem 4.8rem",
                  backgroundColor: "#1EFFAC",
                  color: "white",
                  boxShadow: "none",
                  borderRadius: "1.9rem",
                }}
              >
                Login
              </Button>
            </div>
            <div className="text-center ">
              <p className="m-0">Already Have an Acoount</p>
              <Login />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
