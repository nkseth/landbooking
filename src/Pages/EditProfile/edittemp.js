/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Cards as Card } from "../../Components";
import { Form, Button } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
import Enterotp from '../../Components/Modal/enterotp'

import "./Editprofile.css";

import { Avatar } from "@mui/material";
import Locationstring from "../../Components/locationstring/location";
import { locationnull } from "../../redux/slices/location";
import { signup } from "../../redux/slices/user";
import { withRouter } from "react-router-dom";
import { getprofiledetails } from "../../redux/slices/profile";
import user, {phoneandemailv} from '../../redux/slices/user'
const Editprofile = ({history}) => {
  const user=useSelector((state) => state.user)
  const profile=useSelector((state) => state.profile)
 const  dispatch=useDispatch()
 
    React.useEffect(()=>{
        if(!user.user){
            history.push('/')
          }
          if(user.user){
            dispatch(getprofiledetails())
          }
    },[user.user])
 
    
 React.useEffect(()=>{
    
   dispatch(locationnull())
    },[])

   console.log(profile.profile) 
  const data =useSelector((state) => state.location)
  const [baseurl,setbaseurl]=React.useState("")
const [profiledetails,setprofiledetails]=React.useState({
    name:'',
    email:'',
    phone:'',
    location:'',
    owner:'',
    zipcode:'',
    gender:1,
    dob:'',
    
    password:"",
    cpassword:"",
    images:null
  })
  
useEffect(()=>{
  
setprofiledetails({...profiledetails,zipcode:data.zipcode})
 
   },[data.zipcode])
useEffect(()=>{
setprofiledetails({...profiledetails,
name:profile.profile.name,
email:profile.profile.email,
phone:parseInt(profile.profile.phone),
address:profile.profile.address,
dob:profile.profile.dob,
gender:profile.profile.gender,
zipcode:profile.profile.zipcode
})
},[profile.profile])


   const addimage=async (e)=>{
   console.log(e.target.files)
 setprofiledetails({...profiledetails,image:e.target.files[0]})
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
await toBase64(e.target.files[0]).then((result)=>{
 console.log(result)
 setbaseurl(result)
 console.log(result)
})
   
}
 
const onSignup=()=>{
    console.log(profiledetails)
    const formdata= new FormData()
    formdata.append('name',profiledetails.name)
    formdata.append('email',profiledetails.email)
    formdata.append('phone',profiledetails.phone)
    formdata.append('password',profiledetails.password)
    formdata.append('latitude',data.latitude)
    formdata.append('longitude',data.longitude)
    formdata.append('zipcode',data.zipcode)
    formdata.append('gender',profiledetails.gender)
    formdata.append('dob',profiledetails.dob)
    formdata.append('address',data.locationstring[0])
    formdata.append('registerAsHost',profiledetails.ishost)
   
  if(profiledetails.image) formdata.append('image',data.profiledetails.image)
    dispatch(signup(formdata))
}
 
const [show,setshow]=React.useState(false)
const [type,settype]=React.useState(1)
const  onverfyclick=(type)=>{
  
    dispatch(phoneandemailv(type,data.user?.user?.uuid))
  }
return (
   
    <section className="padd-0" style={{marginTop:'150px'}}>
      <Enterotp show={show} close={onclose} type={type} />
     
    <div className="container d-flex flex-direction-column align-items-center justify-content-center">
      <div className="col-md-10 translateY-60 col-sm-12 col-md-offset-1">
        {/* General Information */}
        <div className="add-listing-box edit-info mrg-bot-25 padd-bot-30 padd-top-25">
        { 
         user?.user?.user?.emailVerified && user?.user?.user?.phoneVerified?
         <div className="d-flex justify-content-center align-content-center w-100 p-3" style={{backgroundColor:'#c22027'}}>
          <h6 
          style={{color:'white',marginBottom:0}}
          >Please verify Your Email and Phone No. to contiune Using the Application</h6>
          </div>:null
          }
          <div className="listing-box-header">
            <div className="avater-box">
              <Avatar src={baseurl} 
              style={{width: '100%', height: '100%',borderRadius:"100%"}}
              className="img-fluid img-circle edit-avater" alt="" />
              <div className="upload-btn-wrapper">
                <button className="btn theme-btn">Change Avatar</button>
                <input type="file" name="myfile" onChange={(e)=>{addimage(e)}} />
              </div>
            </div>

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
              
                { user.user?.user?.emailVerified?<img src="https://img.icons8.com/color/48/000000/verified-account.png" alt="verified" 
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
              
                { user.user?.user?.phoneVerified?<img src="https://img.icons8.com/color/48/000000/verified-account.png"
                style={{width:'30px', height:'30px'}}
                alt="verified"/>:
                <Button  variant="outline-primary" style={{width:'150px',height:'40px',marginLeft:'5px'}}
                onClick={()=>{onverfyclick(2);setshow(true);settype(2)}}
                >Verify</Button>
}
                </div>
              </div>
              <Locationstring default={profile.profile.address} dtype={false}/>
              <div className="col-sm-6">
                <label>Owner Designation</label> 
                <input type="text" className="form-control" value={profiledetails.owner} 
                 onChange={(e)=>{setprofiledetails({...profiledetails, owner:e.target.value})}}
                />
              </div>
              <div className="col-sm-6">
                <label>zipcode</label>
                <input type="text" className="form-control" 
                value={profiledetails.zipcode} 
                onChange={(e)=>{setprofiledetails({...profiledetails, zipcode:e.target.value})}}
                />
              </div>
              <div className="col-sm-6">
                <label>Gender</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                 value={profiledetails.gender} 
                 onChange={(e)=>{setprofiledetails({...profiledetails, gender:e.target.value})}}
                >
                  <option value={1}>Male</option>
                  <option value={2}>Female</option>
                  <option value={3} >Other</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label>DOB</label>
                <input type="date" className="form-control" 
                value={profiledetails.dob} 
                onChange={(e)=>{setprofiledetails({...profiledetails, dob:e.target.value})}}
                />
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
            <h3>Set your Password</h3>
            <p>Remember, Your Password should not be easy and common</p>
          </div>
          <form>
            <div className="row mrg-r-10 mrg-l-10">
              <div className="col-sm-6">
                <label>Password</label>
                <input type="text" className="form-control" placeholder="Password"
                 value={profiledetails.password}
                 onChange={(e)=>{setprofiledetails({...profiledetails, password:e.target.value})}}
                />
              </div>
              <div className="col-sm-6">
                <label>Confirm Password</label>
                <input type="text" className="form-control" placeholder="Password" 
                  value={profiledetails.cpassword}
                  onChange={(e)=>{setprofiledetails({...profiledetails, cpassword:e.target.value})}}
                />
              </div>
            </div>
          </form>
        </div>
        {/* End Change Password Information */}
        <div className="text-center">
          <Button className="btn theme-btn" title="Submit Listing" onClick={onSignup}>Sign up</Button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default withRouter(Editprofile);
