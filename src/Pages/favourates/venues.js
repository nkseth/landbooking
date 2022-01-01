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
                      <div className="small-list-img d-flex align-items-center "  style={{width:100}}>
                        <img src={`${data.images[0]?baseurl+data.images[0]:""}`} className="w-100" alt="" />
                      </div>
                      <div className="small-list-detail">
                        <h4>{data.title}</h4>
                        <p>{data.category?data.category.name:"Category"}</p>
                      </div>
                      <div className="small-list-action light d-flex flex-wrap justify-content-center" >
                      
                         
                          <div  onClick={()=>{history.push(`/view-detail/${data.uuid}`)}} className="light-gray-btn btn-square" style={{width:'150px'}} data-placement="top" data-toggle="tooltip" title="Edit Item"><i className="ti-pencil" />
                          View Details
                          </div>
                      
                      
                        <div  
                        onClick={()=>{dispatch(removeFavourites(data.uuid));
                            setTimeout(()=>{dispatch(viewFavourites())},1000)
                        }}
                        className="theme-btn btn-square" data-toggle="tooltip" title="Cancel"><i className="ti-trash" /> <FaTimesCircle style={{fontSize:16,margin:5}} /></div>
                     
                        </div>
                    </div>
                  </li>)
}
export default withRouter(Venue)