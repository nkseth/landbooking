import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'
import { baseurl } from "../../config";
import { Deletelisting } from "../../redux/slices/popularlisting";



const LBModal = (props) => {
const [data,setdata]=React.useState(null)
const user=useSelector((state) => state.user)
const dispatch = useDispatch()

const deletes=()=>{
    dispatch(Deletelisting(props.id))
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
        <div className="d-flex justify-content-center align-items-center flex-column">
   <h6>Aur you sure you want to delete this listing</h6>
   <div className="d-flex justify-content-center align-items-center mt-5">
       <Button style={{backgroundColor:"green",width:'100px',marginRight:"20px"}}
       onClick={deletes}
       >Yes</Button>
       <Button style={{backgroundColor:"red",width:'100px'}}>No</Button>
   </div>
   </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(LBModal);
