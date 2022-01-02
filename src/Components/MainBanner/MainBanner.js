/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Form, Button } from "react-bootstrap";
import Bannerbg from "../../assets/title-bg.jpg";

import "./MainBanner.css";
import { useDispatch, useSelector } from "react-redux";

import Locationstring from "../locationstring/location";
import { withRouter } from "react-router-dom";
import { getcategory, getcategorypublic } from "../../redux/slices/categories";
const MainBanner = ({history}) => {
  const dispatch=useDispatch()
  const user=useSelector((state) => state.user)
  React.useEffect(()=>{
 
 
    if(!user.user) dispatch(getcategorypublic())
   else dispatch(getcategory())
  },[])
  
  

 
 
 
  const [localaddress,setlocalddress]=React.useState("")
  
  
  
  const updateaddress=(string)=>{
  
    setlocalddress(string)
   }
  
  
   const data = useSelector((state) => state.user);


  const [r,setr]=React.useState(10)
  React.useEffect(()=>{
   console.log(data)
  },[data])
 
 
  const [selectedcategory,setselectedcategory]=React.useState({})
 
 
  const categories=useSelector((state) => state.categories)
 
 
  return (
    <div
      className="home-banner"
      style={{
        backgroundImage: `url(${Bannerbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        maxWidth:'100vw',
        color:'white',
        marginTop: "0px",
        padding: "0px"
      }}
    >
      <div
        className="content-container p-md-2 "
        style={{
          backgroundColor: "rgba(58, 87, 135, 0.45)",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
         
        
        }}
      >
        <div className="text-container text-white text-center  ">
          <h1
            style={{
              fontWeight: 550,
              letterSpacing: 1.3,
              wordSpacing: 3,
              color: 'white',
            
              marginTop:'-100px'
            }}
          >
            Looking to rent a Yard, parking space or Tennis Court for an Hour or
            more!!
          </h1>
          <p
            style={{
              color: "#DFE1E7",
            }}
          >
            You Are At The Right Place. Lets Go Ahead And Grab The Best Deal
          </p>
        </div>
        <div className="form-container container d-flex justify-content-center ">
          <Form className="d-flex flex-md-row flex-column form-inputs">
          <div className="d-flex justify-content-center align-items-center bg-white  w-100 p-2  p-0 flex-wrap flex-md-nowrap" 
          style={{backgroundColor:'red'}}> 
             
             
             <Locationstring label="none" size="col-sm-8" 
              onaddresschanging={updateaddress}
              getaddress={true}
              style={{border:'none',marginBottom:'0px',width:'100%',color:'gray'}}
              />
               
              <Form.Control
                size="lg"
                type="number"
                placeholder="Radius"
                className=" form-control w-100"
                id="form-input"
                
                style={{ marginBottom:'0px',}}
               onChange={(e)=>{setr(e.target.value)}}
              />
              </div>
           
            <div className="d-flex justify-content-center align-items-center bg-white  w-100 py-0  p-0">
           
            <select data-placeholder="Choose Category" 
            style={{marginBottom:0,border:'none'}}
                onChange={(e)=>{
                  setselectedcategory(
                    categories?.categories?.find((item,index)=>{if(e.target.value===item.uuid) return true}))
            }
            }
                className="form-control chosen-select" tabIndex={2}>	<option value={0} >Select Category</option>
                {
                  categories?.categories?.map((item)=>{
                      return <option value={item.uuid}> {item.name}</option>
                  })
                }
                  
                </select>
         
            </div>
            <Button
              variant="btn"
              style={{
                backgroundColor: "#1EFFAC",
                color: "white",
                borderRadius: 0,
                boxShadow: "none",
                fontSize: "22px",
              }}
              className="button px-5 p-1 "
              onClick={()=>{history.push(`/listing?categoryId=${selectedcategory && selectedcategory.uuid}&address=${localaddress&&localaddress}&r=${r && r}`)}}
            >
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainBanner);
