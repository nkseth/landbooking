/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
import user, {phoneandemailv} from '../../redux/slices/user'
import OtpInput from 'react-otp-input';

import "./Editprofile.css";
import Enterotp from '../../Components/Modal/enterotp'
import { Avatar } from "@mui/material";
const Editprofile = () => {
  
  const data =useSelector((state) => state.user)

  const dispatch=useDispatch()
  const [show,setshow]=React.useState(false)
  const [type,settype]=React.useState(1)
  const onclose=()=>{
    setshow(false)
    
  }

  const [profiledetails,setprofiledetails]=React.useState({
    name:'',
    email:'',
    phone:'',
    location:'',
    owner:'',
    zipcode:'',
    gender:1,
    dob:''
  })
  
useEffect(()=>{
  
   
 setprofiledetails({...profiledetails,name:data.user.user.displayName,
  email:data.user.user.email,
  phone:data.user.user.phone,
  location:data.user.user.address,
  zipcode:data.user.user.zipcode
})

 
   },[data.user.user])

 const  onverfyclick=(type)=>{
  
    dispatch(phoneandemailv(type,data.user?.user?.uuid))
  }


 

  
  return (
   
    <section className="padd-0" style={{marginTop:'150px'}}>
       {console.log(profiledetails)}
      <Enterotp show={show} close={onclose} type={type} />
    <div className="container d-flex flex-direction-column align-items-center justify-content-center">
      <div className="col-md-10 translateY-60 col-sm-12 col-md-offset-1">
        {/* General Information */}
        <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
          <div className="listing-box-header">
            <div className="avater-box">
              <Avatar src="" 
              style={{width: '100%', height: '100%',borderRadius:"100%"}}
              className="img-fluid img-circle edit-avater" alt="" />
              <div className="upload-btn-wrapper">
                <button className="btn theme-btn">Change Avatar</button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <h3 className="mt-1">{data.user.user.displayName}</h3>
            <p>Business man</p>
          </div>
          <form>
            <div className="row mrg-r-10 mrg-l-10">
              <div className="col-sm-6">
                <label>Name</label>
                <input type="text" className="form-control" value={profiledetails.name}
                onChange={(e)=>{setprofiledetails({...profiledetails, name:e.target.value})}}
                />
              </div>
              <div className="col-sm-6">
              <label>Email</label>
              <div style={{display: 'flex',alignItems:'center'}}>
                <input type="email" className="form-control" defaultValue="nanaksethh@gmail.com" 
                value={profiledetails.email}
                onChange={(e)=>{setprofiledetails({...profiledetails, email:e.target.value})}}
                />
              
                { data.user?.user?.emailVerified?<img src="https://img.icons8.com/color/48/000000/verified-account.png" alt="verified" 
                style={{width:'30px', height:'30px'}}/>:
                <Button  variant="outline-primary" style={{width:'150px',height:'40px',marginLeft:'5px'}}
                onClick={()=>{onverfyclick(1);setshow(true);settype(1)}}
                >Verify</Button>
}
                </div>
              </div>
              <div className="col-sm-6">
                <label>Phone</label>
                <div style={{display: 'flex',alignItems:'center'}}>
                <input type="number" className="form-control" defaultValue="91 703 4448 855  "
                value={profiledetails.phone}
                onChange={(e)=>{setprofiledetails({...profiledetails, phone:e.target.value})}}
                />
              
                { data.user?.user?.phoneVerified?<img src="https://img.icons8.com/color/48/000000/verified-account.png"
                style={{width:'30px', height:'30px'}}
                alt="verified"/>:
                <Button  variant="outline-primary" style={{width:'150px',height:'40px',marginLeft:'5px'}}
                onClick={()=>{onverfyclick(2);setshow(true);settype(2)}}
                >Verify</Button>
}
                </div>
              </div>
              <div className="col-sm-6">
                <label>Location</label>
                <input type="text" className="form-control" defaultValue=" 1126 mavi	 Road, NV 89107" />
              </div>
              <div className="col-sm-6">
                <label>Owner Designation</label>
                <input type="text" className="form-control" defaultValue="Account Manager" />
              </div>
              <div className="col-sm-6">
                <label>zipcode</label>
                <input type="text" className="form-control" defaultValue="Account Manager" />
              </div>
              <div className="col-sm-6">
                <label>Gender</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select">
                  <option>1</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label>DOB</label>
                <input type="date" className="form-control" defaultValue="Account Manager" />
              </div>
              {/* <div className="col-sm-6 " style={{display: 'flex',flexDirection: 'column'}}>
                <label style={{fontWeight:'bold'}}>Profile picture</label>
                <input type="file" name="myfile" />
              </div> */}
            </div>
          </form>
        </div>
        {/* End General Information */}
        {/* Change Password Information */}
        <div className="add-listing-box opening-day mrg-bot-25 padd-bot-30 padd-top-25">
          <div className="listing-box-header">
            <i className="ti-lock theme-cl" />
            <h3>Change Password</h3>
            <p>Remember, Your Password should not be easy and common</p>
          </div>
          <form>
            <div className="row mrg-r-10 mrg-l-10">
              <div className="col-sm-6">
                <label>Old Password</label>
                <input type="text" className="form-control" defaultValue="*********" />
              </div>
              <div className="col-sm-6">
                <label>New Password</label>
                <input type="text" className="form-control" defaultValue="*********" />
              </div>
            </div>
          </form>
        </div>
        {/* End Change Password Information */}
        <div className="text-center">
          <a href="#" className="btn theme-btn" title="Submit Listing">Update Profile</a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Editprofile;
