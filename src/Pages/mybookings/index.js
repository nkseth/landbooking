import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getbookings } from '../../redux/slices/mybookings'
import Booking from './bookings'

const Mybookings=({history})=>{

    const data = useSelector((state)=>state.mybookings)
const user = useSelector((state)=>state.user)
const dispatch = useDispatch()
React.useEffect(()=>{
  if(user.user){
    if(!user.user.user.emailVerified || !user.user.user.phoneVerified) history.push('/editprofile')
    else dispatch(getbookings())
  }
},[user.user])

return(
    <div>
    <div className="clearfix " style={{marginTop:170}} />
    {/* <section className="padd-0">
      <div className="container">
        <div className="col-md-12 translateY-60 col-sm-12">
       
          <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
            <div className="listing-box-header">
              <div className="avater-box">
                <img src="assets/img/avatar.jpg" className="img-responsive img-circle edit-avater" alt="" />
                <span className="avater-status status-pulse online" />
              </div>
              <h3>Daniel M. Dev</h3>
              <p>270 Listing</p>
            </div>
          </div>
         
        </div>
      </div>
    </section> */}
    <section className="manage-listing padd-top-0">
      <div className="container">
          <h5 className="mb-5">My Bookings</h5>
        <div className="col-md-12 col-sm-12">
          {/* Start All Listing List */}
          <div className="row">
            <div className="col-md-12">
              <div className="small-list-wrapper">
                <ul>
              {data?.mybooking?.length>0?
                  data.mybooking?.map((item)=>{
                       return <Booking data={item}/>
                  }):<h5>No bookings yet</h5>
              }   
              
                 
                </ul>
              </div>
            </div>
          </div>
          {/* End All Listing List */}
        </div>
      </div>
    </section>
  </div>
)
}
export default withRouter(Mybookings)