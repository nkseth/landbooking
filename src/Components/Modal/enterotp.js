import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Signup from "./Signup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {validate} from '../../redux/slices/user'
import OtpInput from "react-otp-input";
const LBModal = (props) => {

  const dispatch=useDispatch()


const data=useSelector((state)=>state.user)

const [otp,setotp]=React.useState("")

  return (
    <>
  

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close();setotp("")}}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
           Enter Otp
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{width:'100%',display: 'flex',justifyContent: 'space-evenly',alignItems:"center"}}>
        <OtpInput
        value={otp}
    containerStyle={{justifyContent: 'space-evenly',minWidth:"200px"}}
        style={{width:'100%'}}
        inputStyle={{minWidth:'5vw',minHeight:'5vw',fontSize:'20px'}}
        onChange={(e)=>{setotp(e)}}
        numInputs={6}
        separator={<span>-</span>}
      />
      </div>
      {console.lo}
      <Button style={{marginTop:50}} onClick={()=>{ dispatch(validate(data.validation,otp,props.type));props.close()}}>Verify</Button>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
