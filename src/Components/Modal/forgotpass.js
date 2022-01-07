import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  opensnackbar,
  phoneandemailv,
  validate,
} from "../../redux/slices/user";
import OtpInput from "react-otp-input";

const LBModal = (props) => {
  const [resendopt, setresendotp] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.user);
  const [enterusername, setusername] = React.useState("");
  const [newpassword, setnewpassword] = React.useState("");
  const [otp, setotp] = React.useState("");

  const validateotp = () => {
    dispatch(validate(data.validation, otp, 3, newpassword));
    setnewpassword("");
    setusername("");
    setresendotp(false);
    props.close();
  };
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.close();
          setotp("");
          setnewpassword("");
          setusername("");
          setresendotp(false);
        }}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="my-2">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                User Name
              </Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="username"
                value={enterusername}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                style={{ fontSize: "16px" }}
              />
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                New Password
              </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                placeholder="New password"
                value={newpassword}
                onChange={(e) => {
                  setnewpassword(e.target.value);
                }}
                style={{ fontSize: "16px" }}
              />
            </div>
            {resendopt ? (
              <OtpInput
                value={otp}
                containerStyle={{
                  justifyContent: "space-evenly",
                  minWidth: "200px",
                }}
                style={{ width: "100%" }}
                inputStyle={{
                  minWidth: "5vw",
                  minHeight: "5vw",
                  fontSize: "20px",
                }}
                onChange={(e) => {
                  setotp(e);
                }}
                numInputs={6}
                separator={<span>-</span>}
              />
            ) : null}
          </div>

          {resendopt ? (
            <Button
              style={{ marginTop: 50 }}
              onClick={() => {
                validateotp();
                setotp("");
              }}
            >
              Verify
            </Button>
          ) : null}
          <div className="text-center">
            <Button
              style={{
                marginTop: 20,
                maxWidth: "240px",
                fontSize: "15px",
                backgroundColor: "#1effac",
                color: "white",
                border: "none",
              }}
              onClick={() => {
                if (
                  enterusername !== "" &&
                  newpassword !== "" &&
                  newpassword.length > 6
                ) {
                  dispatch(phoneandemailv(3, enterusername));
                  setotp("");
                  setresendotp(true);
                } else {
                  dispatch(
                    opensnackbar(
                      "error",
                      "Please Enter Proper Details to continue"
                    )
                  );
                }
              }}
            >
              {resendopt ? "Resend Otp" : "Send Otp to verify username"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
