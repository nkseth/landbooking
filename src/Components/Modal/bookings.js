import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Signup from "./Signup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../redux/slices/user'
import {Link} from 'react-router-dom'
import Forgototp from './forgotpass'
const LBModal = (props) => {
  
   const dispatch=useDispatch()
const userdata=useSelector((state)=>state.data)

  return (
    <>
 

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close()}}
        dialogClassName="modal-150w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
           View Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
