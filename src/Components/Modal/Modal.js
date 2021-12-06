import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const LBModal = () => {
  const [show, setShow] = useState(false);
  return (
    <>
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
        size="md"
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
              Welcome <span style={{ color: "#1EFFAC" }}>Back!</span>
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
              <Form.Check
                isValid
                type="checkbox"
                id="checkbox"
                label="Keep me SIgned in"
                style={{
                  boxShadow: "none",
                  color: "#798092",
                }}
              />
            </div>
            <div className="mt-5 d-flex justify-content-center">
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
            <div className="text-center">
              <p>Don't have an account</p>
              <Button
                className="p-0"
                variant="btn"
                style={{
                  color: "#1EFFAC",
                  boxShadow: "none",
                }}
              >
                Create an Account
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
