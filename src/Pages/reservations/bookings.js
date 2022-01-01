import React from 'react'
import Bookingmodal from '../../Components/Modal/bookings'
import {FaPencilAlt,FaTimesCircle} from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import Reviewmodal from '../../Components/Modal/review'
const Booking=({data,history,venuedata})=>{
   const [show,setshow]=React.useState(false)
   const [rshow,setrshow]=React.useState(false)
   const close=()=>{
       setshow(false)
   }
   const rclose=()=>{
    setrshow(false)
}

   return( <li>
       <Bookingmodal show={show} close={close} data={data} reservations={true}
       amount={data.payment.amount}
       />
       
                    <div className="small-listing-box light-gray">
                      
                      <div className="small-list-detail " style={{marginLeft:10}}>
                        <h4>{data?.reservedBy?.name}</h4>
                        <p>{data?.reservedBy?.address?data?.reservedBy?.address:"address"}</p>
                      </div>
                      <div className="small-list-action light d-flex flex-wrap justify-content-center" >
                    
                         
                          <div  onClick={()=>{setshow(true)}} className="light-gray-btn btn-square" style={{width:'150px'}} data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" />
                          View Details
                          </div>
                       
                       
                        {/* <div  className="theme-btn btn-square" data-toggle="tooltip" title="Cancel"><i className="ti-trash" /> <FaTimesCircle style={{fontSize:16,margin:5}} /></div> */}
                      
                        </div>
                    </div>
                  </li>)
}
export default withRouter(Booking)