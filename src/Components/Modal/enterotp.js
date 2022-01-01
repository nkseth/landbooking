import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Signup from "./Signup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {phoneandemailv, validate} from '../../redux/slices/user'
import OtpInput from "react-otp-input";

const LBModal = (props) => {
const [resendopt,setresendotp]=useState(false)
  const dispatch=useDispatch()


const user=useSelector((state) => state.user)
const data=useSelector((state)=>state.user)
const currentvalidationstate=useSelector((state)=>state.profile)
const [otp,setotp]=React.useState("")

const validatesys=(ty)=>{
  if(data.validation!==null)
  dispatch(validate(data.validation,otp,props.type))
  else if(currentvalidationstate.verificationstate){
      if(ty===1){
        dispatch(validate({userId:user.user.user.uuid,verificationId:currentvalidationstate.verificationstate.emailVerificationId},otp,props.type))
      }
      if(ty===2){
        dispatch(validate({userId:user.user.user.uuid,verificationId:currentvalidationstate.verificationstate.phoneVerificationId},otp,props.type))
      }
    }
  
}

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
     
      <Button style={{marginTop:50}} onClick={()=>{validatesys(props.type);setotp("")
      ;props.close()}}>Verify</Button>
         <div className="text-center">
         <Button style={{marginTop:20,maxWidth:'150px',fontSize:'15px',backgroundColor:'#1effac',
         color:'white',border:'none'}} onClick={()=>{ 
        dispatch(phoneandemailv(props.type,props.userid));setotp("");setresendotp(true)}}>Resend Otp</Button>  
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
