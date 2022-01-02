import moment from 'moment'
import React from 'react'

import {FaTimesCircle} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { baseurl } from '../../config'
import { removeFavourites, viewFavourites } from '../../redux/slices/popularlisting'

const Venue=({data,history,deleteone,index})=>{
const dispatch =useDispatch()

   return( <li>
     
                    <div className="small-listing-box light-gray">
                      
                      <div className="small-list-detail mx-2">
                        <h4>{data.stripeId}</h4>
                        <p>{moment(data.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
                      </div>
                      <div className="small-list-action light d-flex flex-wrap justify-content-center" >
                      <div style={{marginRight:'10px'}}>
                              <p style={{marginBottom:0}}>Type</p>
                              <h6>{data.type===2?"REFUND":
                              data.type===1?"CHARGE":
                              data.type===3 &&"PAYOUT"
                              }</h6>
                          </div>
                      <div style={{marginRight:'10px'}}>
                              <p style={{marginBottom:0}}>Status</p>
                              <h6>{data.status===2?"REFUND":
                              data.status===1?"CHARGE":
                              data.status===3 &&"PAYOUT"
                              }</h6>
                          </div>
                      <div   className="light-gray-btn btn-square" style={{width:'150px'}} data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" />
                          Amount:{data.amount}
                          </div>
                        
                          <div  onClick={()=>{history.push(`/view-detail/${data.uuid}`)}} className="light-gray-btn btn-square" style={{width:'150px'}} data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" />
                          View Details
                          </div>
                      </div>
                      
                     
                    </div>
                  </li>)
}
export default withRouter(Venue)