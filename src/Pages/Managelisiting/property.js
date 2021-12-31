import React from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../../config";
import {FaCalendarAlt, FaPencilAlt} from 'react-icons/fa'
import Slotmanger from '../../Components/Modal/slotmanage'
import Bolkmanager from '../../Components/Modal/blockdates'
import { BlockRounded, DeleteTwoTone } from "@mui/icons-material";
import Deletenotiy from '../../Components/Modal/newnotification'
const Property=({item})=>{
  const [show,setshow]=React.useState(false)
  const [del,setdel]=React.useState(false)
  const [blockd,setblock]=React.useState(false)
const close=()=>{
  setshow(false)
}
const closeblock=()=>{
  setblock(false)
}
const delclose=()=>{
  setdel(false)
}
    return(
    <div className="add-listing-box edit-info verticleilist listing-shot">
      <Slotmanger id={item.uuid} show={show} close={close}  slots={item.slots}/>
      <Bolkmanager id={item.uuid} show={blockd} close={closeblock}  slots={item.slots}/>
      <Deletenotiy id={item.uuid} show={del} close={delclose}/>
    <a className="listing-item" href="#">
      <div className="listing-shot-img">
        <img src={`${baseurl}${item.images[0]}`} className="img-responsive" alt="" />
        <span className="listing-price">${item.rent}</span>
      </div>
    </a>
    <div className="verticle-listing-caption " >
   
      <div style={{position:'absolute',display:'flex',top:10,right:10}}>
      <div className="editlisting"  onClick={()=>{setblock(true)}}>  
            <BlockRounded style={{fontSize:20,}} />
           <p style={{fontSize:'10px',marginBottom:0}}> Block dates</p>
     </div>
     <div className="editlisting" onClick={()=>setshow(true)}>  
        <FaCalendarAlt style={{fontSize:20,}} />
        <p style={{fontSize:'10px',marginBottom:0}}>Schedule</p>
 </div>

 <Link to={`/editlisting/${item.uuid}`}>
     
 <div className="editlisting">  
        <FaPencilAlt style={{fontSize:20,}} />
       <p style={{fontSize:'10px',marginBottom:0}}>edit Listing</p>
 </div></Link>
 <div className="editlisting"  onClick={()=>{setdel(true)}}>  
            <DeleteTwoTone style={{fontSize:20,}} />
           <p style={{fontSize:'10px',marginBottom:0}}> Delete</p>
     </div>
     </div>
       
      <div className="listing-shot-caption " style={{maxWidth:'75%',minHeight:"80%"}} >
        <h4>{item.title}</h4>
        <p className="listing-description" >{item.description}</p>
      </div>
      <div className="listing-shot-info rating">
        <div className="row extra d-flex justify-content-end">
        
          <div className="col-md-12  col-xs-6 pull-right">
            <Link  to={`./view-detail/${item.uuid}`} className="detail-link">View  Preview</Link>
            <Link  to={`./view-reservations/${item.uuid}`} className="detail-link " style={{marginRight:'10px'}}>View Reservations</Link>
          </div>
       
        </div>
      </div>
    </div>
  </div>
    )
}
export default Property