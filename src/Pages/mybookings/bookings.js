import Button from '@restart/ui/esm/Button'
import React from 'react'
import Bookingmodal from '../../Components/Modal/bookings'
const Booking=({data})=>{
   const [show,setshow]=React.useState(false)
   const close=()=>{
       setshow(false)
   }
   return( <li>
       <Bookingmodal show={show} close={close}/>
                    <div className="small-listing-box light-gray">
                      <div className="small-list-img" style={{width:100}}>
                        <img src="https://tigerturf.com/in/wp-content/uploads/2019/11/How-to-build-a-tennis-court.jpg" className="w-100" alt="" />
                      </div>
                      <div className="small-list-detail">
                        <h4>{data.venue.title}</h4>
                        <p>{data.venue.category?data.venue.title:"Category"}</p>
                      </div>
                      <div className="small-list-action light d-flex">
                          <div>
                              <p style={{marginBottom:0}}>status</p>
                              <h6>{data.status===2?"CONFIRMED":
                              data.status===1?"INPROCESS":
                              data.status===3?"CANCELLED":
                              data.status===4 && "COMPLETED"
                              }</h6>
                          </div>
                         
                          <div  onClick={()=>{setshow(true)}} className="light-gray-btn btn-square" style={{width:'150px'}} data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" />
                          View Details
                          </div>
                        <div  className="light-gray-btn btn-square" data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" /></div>
                        <div  className="theme-btn btn-square" data-toggle="tooltip" title="Delete Item"><i className="ti-trash" /></div>
                      </div>
                    </div>
                  </li>)
}
export default Booking