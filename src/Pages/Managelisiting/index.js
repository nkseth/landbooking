import React from "react";
import  Property from "./property";
import {useSelector,useDispatch} from 'react-redux';
import {viewhostedlisting} from '../../redux/slices/popularlisting'
import {baseurl} from '../../config'
import { Avatar } from "@mui/material";


const Listing = () => {
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(viewhostedlisting())
    },[])
const data = useSelector((state)=>state.popularlisting)
const user = useSelector((state)=>state.user)

console.log(data)
  return (
  <div style={{marginTop:150}}>
   <section className="padd-0" >
          <div className="container">
            <div className="col-md-12 translateY-60 col-sm-12">
              {/* General Information */}
              <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
                <div className="listing-box-header">
                  <div className="avater-box">
                    <Avatar src={`${baseurl}${user.user?.user?.displayImage?.path}`}
                    style={{width:'100%', height:'100%',borderRadius:'100%'}}
                    className="img-responsive img-circle edit-avater" alt="" />
                    <span className="avater-status status-pulse online" />
                  </div>
                  <h3 className="mt-2">{user.user.user.displayName}</h3>
                  <p>{data.hostedlisting?.length} Listing</p>
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
            data.hostedlisting?.map((item,index)=>{
                return <Property item={item} />
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
