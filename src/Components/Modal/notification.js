import React from "react";
import { Button, Modal} from "react-bootstrap";
import { useDispatch} from "react-redux";
import {withRouter} from 'react-router-dom'


import {confirmreservation} from '../../redux/slices/reservations'
import StripeCheckout from "react-stripe-checkout";
const LBModal = (props) => {
const [data,setdata]=React.useState(null)

const dispatch = useDispatch()

const processcheckout=token=>{
 
 dispatch(confirmreservation(token,props.data.reservationId,props.id))

 
 
 props.close()
}

console.log(data)
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
         {props.noti?.notification?.title}
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div>
           {props.noti?.notification?.body}
      </div>
      <h6>
     
     {props.eventtype==="payment"?"Please Proceed with the payment":props.eventtype==="failed"? "Your request could not be processed please try again":'Please Wait we are processing your request....'} 
     </h6>
     <h6>
     
     {props.eventtype==="payment"?`total Amount:${props.data.amount}`:""} 
     </h6>
     {props.eventtype==="payment" &&
     <StripeCheckout
     stripeKey="pk_test_51JxTaBHneeV50Qz279YeijjaIAMx5QaKg1vPxdFtVqZuY6lfr9HJXLrGWvkkA8xDrP6IXVO0ZkeJC2fdxXsEOPsh00rBgZxSZm"
     token={processcheckout}
     name="hello"
     >
         <Button style={{marginTop:50}} >
             Proceeed With Payment</Button>
          </StripeCheckout>
}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(LBModal);
