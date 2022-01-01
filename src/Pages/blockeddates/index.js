import React, { useState } from "react";
import { Grid,Box } from "@mui/material";
import { BookCard, PaymentForm } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { baseurl } from "../../config";
import {Button} from 'react-bootstrap'
import Blockmodal from '../../Components/Modal/blockdates'
import { useParams } from "react-router-dom";
import { viewdetailsprivate } from "../../redux/slices/popularlisting";
import { Deleteblock, viewblock } from "../../redux/slices/slotmanagement";
import { DeleteTwoTone, EditAttributesOutlined, EditRoadTwoTone, ModeEditOutlined } from "@mui/icons-material";
const BookNow = ({history}) => {
  const [data,setdata]=React.useState(null)
  const user= useSelector((state) => state.user)
  const vewdata=useSelector((state) =>state.popularlisting)
const dispatch = useDispatch()
  React.useEffect(()=>{
    if(user.user){
      if(!user.user.user.emailVerified || !user.user.user.phoneVerified) history.push('/editprofile')
      else{dispatch(viewdetailsprivate(id))
      dispatch(viewblock(id))
    }
    }
  },[user.user])
  
  const {blocks}=useSelector((state) => state.slotmanagement)
const [blockd,setblock]=React.useState(false)
const [edit,setedit]=React.useState(false)
const [bid,setbid]=React.useState("")
const closeblock=()=>{
  setblock(false)
  setedit(false)
}

const [editto,seteditto]=useState("")
const [editfrom,seteditfrom]=useState("")
const [editslot,seteditslot]=useState(null)
const {id}=useParams()
 const [searchtodate,setsearchtodate]=useState("")
 const [searchFromdate,setsearchFromdate]=useState("")
  return (

      <Grid
        container
        mt={6} justifyContent='center'

        sx={{ display: "flex", justifyContent: "center" ,width: "100%",mt:9,minHight:'100%'}}
      >
        <Blockmodal id={id} show={blockd} close={closeblock} slot={vewdata?.listingdetails?.slots} edit={edit} to={editto}
         from={editfrom} editslots={editslot} bid={bid}/>
       
        <Grid item xs={12} direction="row" justifyContent="space-between" style={{}}>
         <div className="d-flex justify-content-between p-3 align-items-center">
          <h5>Blocked Dates</h5>

          <Button style={{maxWidth:'fit-content'}} onClick={()=>{setblock(true)}}>ADD A BLOCK</Button>
        </div>
        </Grid>
        <Grid  item xs={6} container justifyContent="center" alignItems="center">
                   
<div>
   <label>From</label>
   <input type="date" className="form-control" 
          value={searchFromdate} 
         onChange={(e)=>{setsearchFromdate(e.target.value)}}
   />

 </div>
 <div style={{marginLeft:'20px'}} >
   <label>To</label>
   <input type="date" className="form-control" 
          value={searchtodate} 
         onChange={(e)=>{setsearchtodate(e.target.value)}}
   />
   
 </div>
 <div style={{marginLeft:'20px',marginTop:10}} >
  <Button style={{maxWidth:'fit-content'}} onClick={()=>{dispatch(viewblock(id,searchtodate,searchFromdate))}}>SEARCH</Button>
   
 </div>
        </Grid>
        <Grid item  md={12} container justifyContent="start" style={{padding:'10px'}} >
         {
 blocks?.map((item)=>{
    return <div className='px-4 py-3 d-flex m-2' style={{backgroundColor:'#1effac',fontSize:'15px',color:'white',maxWidth:'fit-content'}}>
     <div>
     <p style={{marginBottom:0,textAlign:'center',margin:'auto'}}><span style={{fontWeight:'bold'}}>From: </span>{item.from}<br/><span style={{fontWeight:'bold'}}>to: </span>{item.to}</p>
   <div className="d-flex">
   {item.slots!==null?item.slots.map((slot)=>{
     return <div style={{padding:'5px',borderRadius:'10px',border:'1px solid #1effac',margin:'5px'
     ,maxHeight:'fit-content',display:'flex',justifyContent: 'center',alignItems:'center',width:'30px',height:'30px'
     ,cursor:'pointer',background:"white",userSelect:'none',
     color:"gray"
     }} >
         {slot}
     </div>
   }):null}
   </div>
     </div>
     

  <div className="d-flex justify-content-center align-content-center flex-column p-2 " style={{marginLeft:'10px'}}>
   <div style={{cursor:'pointer',backgroundColor:'#ff3a72',padding:'5px',margin:'2px'}}
   onClick={()=>{
    setedit(true);
     setblock(true);
     seteditto(item.to);
     seteditfrom(item.from);
     setbid(item.uuid)
     if(item.slots!==null) seteditslot(item.slots)
   }}
   
   ><ModeEditOutlined/></div>
   <div style={{cursor:'pointer',backgroundColor:'#ff3a72',padding:'5px',margin:'2px'}}
   onClick={()=>{
     dispatch(Deleteblock(id,item.uuid));
     setTimeout(()=>{
       dispatch(viewblock(id))
      },1000)}}
   >
     <DeleteTwoTone/></div>
   </div>
    </div>
 })
 
}
        </Grid>
      
      
      </Grid>
 
  );
};

export default BookNow;
