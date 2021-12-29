import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'
import { baseurl } from "../../config";

import {confirmreservation} from '../../redux/slices/reservations'
import StripeCheckout from "react-stripe-checkout";
import { Rating } from "@mui/material";
import { opensnackbar } from "../../redux/slices/user";
import { givereviews } from "../../redux/slices/popularlisting";
const Reviewmodal = (props) => {
const [data,setdata]=React.useState(null)
const user=useSelector((state) => state.user)
const dispatch = useDispatch()
const [rating,setrating]=React.useState(0)
const [comment,setcomment]=React.useState("")
const submitrating=()=>{
 if(rating<1 && comment===""){
     dispatch(opensnackbar("error","please Enter all details to give a feedback"))
 } 
 else dispatch(givereviews(props.data.venue.uuid,{remarks:comment,rating:rating}))

 
 
 props.close()
}


  return (
    <>
  {console.log(props.data)}

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close()}}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
       Add A Review
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <div className="text-center">
      <div className="mt-3 mb-3">
      <Rating
      precision={0.5}
       value={rating}
       onChange={(event, newValue) => {
         setrating(newValue);
       }}
      />
      </div>
      <div>
      <textarea className="h-500 form-control" defaultValue={""} 
          onChange={(e)=>{setcomment(e.target.value)}}
/>
      </div>
      <Button onClick={submitrating}>Submit Rerview</Button>
  </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(Reviewmodal);
