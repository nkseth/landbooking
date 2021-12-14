import React from "react";

const Property=()=>{
    return(
    <div className="add-listing-box edit-info verticleilist listing-shot">
    <a className="listing-item" href="#">
      <div className="listing-shot-img">
        <img src="https://st.hzcdn.com/simgs/pictures/patios/keir-residence-true-north-architects-img~f5c174fe00f33ac2_8-4265-1-1305ad9.jpg" className="img-responsive" alt="" />
        <span className="listing-price">$140</span>
      </div>
    </a>
    <div className="verticle-listing-caption">
      <a><span className="like-listing"><i className="fa ti-pencil" aria-hidden="true" /></span></a>
      <div className="listing-shot-caption">
        <h4>Yardcan</h4>
        <p className="listing-description">To give an overview of the yard the yard is 900sq ft in length with feathurslike pool, grill machine and high ambience.
          I have to say this is very good for night party and birthday programs.we have many facilities available for the yard including swimming pool.</p>
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
            <a href="listingdetail.php" className="detail-link">View  Preview</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default Property