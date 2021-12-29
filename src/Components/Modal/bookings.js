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
import { Grid,Box } from "@mui/material";
import { BookCard, PaymentForm } from "..";
const LBModal = (props) => {
  
   const dispatch=useDispatch()
const userdata=useSelector((state)=>state.data)
const CardData = [
    {
      title: "Yardcan",
      imageSrc:
        "https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg",
      location: "Bishop Avenue, Newyork",
      amount: "140$",
    },
  ];
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
        <Grid
        container
        
       
justifyContent='center'

        sx={{ display: "flex", justifyContent: "center" ,width: "100%",}}
      >
       
        <Grid  container  justifyContent="center">
      
        <Grid item xs={11}  container  justifyContent="center" >
          <Box >
          {CardData.map((item, index) => {
            return (
              <BookCard
                title={item.title}
                subTitle={item.location}
                amount={item.amount}
                imageSrc={item.imageSrc}
                data={props.data}
              />
            );
          })}
          </Box>
        </Grid>
        </Grid>
      </Grid>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
