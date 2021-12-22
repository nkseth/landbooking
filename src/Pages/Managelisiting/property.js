import React from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../../config";
import {FaPencilAlt} from 'react-icons/fa'
import { IconButton, Tooltip } from "@mui/material";

const Property=({item})=>{
    return(
    <div className="add-listing-box edit-info verticleilist listing-shot">
    <a className="listing-item" href="#">
      <div className="listing-shot-img">
        <img src={`${baseurl}${item.images[0]}`} className="img-responsive" alt="" />
        <span className="listing-price">${item.rent}</span>
      </div>
    </a>
    <div className="verticle-listing-caption">
   
      <Link to={`/editlisting/${item.uuid}`}>
     
     <div className="editlisting">  
        <FaPencilAlt style={{fontSize:32,margin:10}} />
       
 </div>
       
      
       
        </Link>
       
      <div className="listing-shot-caption" style={{height:'75%'}}>
        <h4>{item.title}</h4>
        <p className="listing-description" >{item.description}</p>
      </div>
      <div className="listing-shot-info rating">
        <div className="row extra">
          <div className="col-md-7 col-sm-7 col-xs-6">
            <i className="color fa fa-star" aria-hidden="true" />
            <i className="color fa fa-star" aria-hidden="true" />
            <i className="color fa fa-star" aria-hidden="true" />
            <i className="color fa fa-star-half-o" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <span>27 Reviews</span>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-6 pull-right">
            <Link  to={`./view-detail/${item.uuid}`} className="detail-link">View  Preview</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Property