import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {withRouter} from 'react-router-dom'

const LBModal = (props) => {
const [data,setdata]=React.useState(null)
 React.useEffect(()=>{
    if(props.noti){
        setdata(JSON.parse(props.noti.data.content))
    }
 },[props.noti])
console.log(props)
  return (
    <>
  

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close()}}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
         {props.noti?.notification?.title}
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div>
           {props.noti?.notification?.body}
      </div>
      {data?<div>
             paymentId:{data.paymentId} <br/>
            request Id:{data.reservationId} 
         </div>:null}
         <Button style={{marginTop:50}} onClick={()=>{props.history.push(`/book-now?paymentId:${data.paymentId}&requestId:${data.reservationId}&venueId:${props.id}`)}}>
             Proceeed With Payment</Button>
          
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(LBModal);
