import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { useDispatch } from "react-redux";
import {login} from '../../redux/slices/user'
import {Link} from 'react-router-dom'
import Forgototp from './forgotpass'
const LBModal = () => {
  const [show, setShow] = useState(false);
  const [forshow, setforShow] = useState(false);
  const dispatch=useDispatch()
 const [logininfo,setlogininfo]=useState({un:'',pass:""})
const [error,seterror]=useState("")
const onLogin=()=>{
  if(logininfo.un==="" || (logininfo.pass.length<6 || logininfo.pass===""))
      {seterror("please enter the right Username Or Password")
    setTimeout(()=>{
      seterror("")
    },2000)
    }else {
      dispatch(login(logininfo.un,logininfo.pass))
      setShow(false)
    }
 

}

const onclose=()=>{
  setforShow(false)
}
  return (
    <>
   <Forgototp show={forshow} close={onclose}   />
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
          display:'flex'
        }}
        onClick={() => setShow(true)}
      >
        <PersonOutlineIcon style={{ color: "#FFC8B8" }} />
        Login/Signup
      </Button>

      <Modal
        size="md"
        show={show}
        onHide={() => {setShow(false)}}
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
                value={logininfo.un}
                onChange={(e)=>{setlogininfo({...logininfo,un:e.target.value})}}
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="my-3">
              <Form.Label style={{ fontWeight: 500, color: "#798092" }}>
                Password
              </Form.Label>
              <Form.Control
                size="lg"
                type="password"
                value={logininfo.pass}
                onChange={(e)=>{setlogininfo({...logininfo,pass:e.target.value})}}
                placeholder="********"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="my-3">
             
              <h6 style={{fontSize:15,fontWeight:300,cursor:'pointer'}}  onClick={()=>{setforShow(true);setShow(false)}}>Forgot Password?</h6>
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
                onClick={()=>{onLogin();}}
              >
                Login
              </Button>
            </div>
            <div className="text-center ">
              <p className="m-0">Don't have an account</p>
            <Link to="/signup">
              <div
        variant="btn"
        style={{
          height: "100%",
          color: "#1EFFAC",
          boxShadow: "none",
          fontSize: "14px",
          borderRadius: 0,
          cursor:'pointer'
        }}
        onClick={() => setShow(false)}
      >
        Create an Account
      </div>
      </Link>
            </div>
          <div><p style={{color:'red'}}>{error}</p></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
