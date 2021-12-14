import React from "react";
import  Property from "./property";


const Listing = () => {

  return (
  <div style={{marginTop:150}}>
   <section className="padd-0" >
          <div className="container">
            <div className="col-md-12 translateY-60 col-sm-12">
              {/* General Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
                <div className="listing-box-header">
                  <div className="avater-box">
                    <img src="https://webdesign.riolabz.com/yardcan/html/assets/img/avatar.jpg" 
                    style={{width:'100%', height:'100%',borderRadius:'100%'}}
                    className="img-responsive img-circle edit-avater" alt="" />
                    <span className="avater-status status-pulse online" />
                  </div>
                  <h3>Daniel M. Dev</h3>
                  <p>5 Listing</p>
                </div>
              </div>
              {/* End General Information */}
            </div>
          </div>
        </section>
      
        <section className="show-case">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center flex-column">
              {/* Start Sidebar */}
              {/* End Start Sidebar */}
              {/* Start Vertical Listing */}
              <div className="col-md-10 translateY-60 col-sm-12 col-md-offset-1 ">
        {
            [1,2].map((item,index)=>{
                return <Property/>
            })
        }       
        
              </div>
              {/* End Vertical Listing */}
            </div>
           
          </div>
        </section>
        </div>
  );
};

export default Listing;
