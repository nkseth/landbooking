import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/material";

const Signup = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="btn"
        style={{
          height: "100%",
          color: "#1EFFAC",
          boxShadow: "none",
          fontSize: "14px",
          borderRadius: 0,
        }}
        onClick={() => setShow(true)}
      >
        Create an Account
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
          <div className="py-4 px-3 ">
          <div className="listing-box-header">
            <div className="avater-box">
              <Avatar src="" 
              style={{width: '50px', height: '',borderRadius:"100%"}}
              className="img-fluid img-circle edit-avater" alt="" />
              <div className="upload-btn-wrapper">
                <button className="btn theme-btn">Change Avatar</button>
                <input type="file" name="myfile" />
              </div>
            </div>
            
          </div>
          <div className="row mrg-r-10 mrg-l-10">
            <div className="my-3 col-md-6">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                User Name
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="username"
                style={{ fontSize: "16px", boxShadow: "none" }}
              />
            </div>
            <div className="my-3 col-md-6">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                Password
              </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="********"
                style={{ fontSize: "16px", boxShadow: "none" }}
              />
            </div>
            </div>
            <div className="my-3">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="********"
                style={{ fontSize: "16px", boxShadow: "none" }}
              />
            </div>
            <div className="my-3">
              <Form.Control
                size="lg"
                type="Dropdown"
                placeholder="Register as a.."
                style={{ fontSize: "16px", boxShadow: "none" }}
              />
            </div>
            <div className="my-2">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    style={{ color: "#1EFFAC", boxShadow: "none" }}
                  />
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
                Sign Up
              </Button>
            </div>
            <div className="text-center ">
              <p className="m-0">Already Have an Acoount?</p>
              <Button
                variant="btn"
                style={{
                  height: "100%",
                  color: "#1EFFAC",
                  boxShadow: "none",
                  borderRadius: "1.9rem",
                }}
                onClick={() => setShow(false)}
              >
                Login
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
