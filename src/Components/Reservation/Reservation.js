import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import Multidatepicker from "./multidatepicker";

const Reservation = ({data}) => {
const [avaliableslot,setavaliableslot]=React.useState({})
const [selectedate,setselecteddate]=React.useState("")
const [selectdsalot,setlectdsalot]=React.useState([])

React.useEffect(()=>{
  const newslots=[]
data?.schedules.map((item)=>{
if(item.date===selectedate) newslots.push(item)
})
setavaliableslot(newslots[0])
console.log(newslots)
},[selectedate])

const istheir=(item,slot,ss)=>{
  
 let timeindex=null
 selectdsalot.map((i,index)=>{if(i.time===item) return timeindex=index})
  if(timeindex!==null){
    let slotindex=null
    selectdsalot[timeindex].slots.map((itemt,ind)=>{if(itemt===slot) return slotindex=ind})
   if(slotindex!==null){
     return true
   }
   else{
   return false
   }
}
 else return false
}

const addandremove=(item,slot)=>{
 const tempslot=selectdsalot
 let timeindex=null
 tempslot.map((i,index)=>{if(i.time===item) return timeindex=index})
  if(timeindex!==null){
    let slotindex=null
    tempslot[timeindex].slots.map((itemt,ind)=>{if(itemt===slot) return slotindex=ind})
   if(slotindex!==null){
    tempslot[timeindex].slots.splice(slotindex,1)
    if(tempslot[timeindex].slots.length<1) tempslot.splice(timeindex,1)
   }
   else{
    tempslot[timeindex].slots.push(slot)
   }
}
 else tempslot.push({time:item,slots:[slot]})
 console.log(tempslot)
  setlectdsalot(tempslot)

}
React.useEffect(()=>{

},[selectdsalot])

  return (
    <div
      className="Reservation-container p-3 py-4 my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
      <div className="heading-container " style={{ color: "#334E6F" }}>
        <div
          className="d-flex align-items-center p-2 mb-4"
          style={{ borderBottom: "1px solid #eaeff5" }}
        >
          <CalendarTodayOutlinedIcon
            style={{ fontSize: "18px", marginRight: "5px" }}
          />
          <Typography varient="h3">
            <b>Book A Reservation</b>{" "}
          </Typography>
        </div>
      </div>
      <div
        className=" d-flex align-items-center "
        style={{ color: "#334E6F", fontSize: "14px" }}
      >
        <Form className="d-flex justify-content-center align-items-center flex-md-row flex-column">
         <Multidatepicker
         element={ <Form.Control
            size="lg"
            type="date"
            className="m-2 w-90 p-3 form-input"
            id="form-input"
            value={selectedate}
            onChange={(e)=>{setselecteddate(e.target.value)}}
          />}
          />
          
        </Form>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-wrap"> 
     <h6 className="d-flex w-100 align-items-center justify-content-center">Please Select time and slots</h6>
     {avaliableslot?.intervals?.map((item,index)=>{
    
      return <div key={index}
        className=" d-flex align-items-center flex-column"
        style={{ color: "#334E6F", fontSize: "14px",
        border:'1px solid #1effac ',margin:'10px',padding:'3px', 
      cursor:'pointer',borderRadius:'10px'
      }}
      >
     
        {item.time}
        <p style={{fontSize:'8px',marginBottom:0}}>please select slot</p>
        <div className=" d-flex align-items-center">
     {item.slots.map((slot,index2)=>{
       if(slot.status===1)
        return <div onClick={()=>{addandremove(item.time,slot.id)}}
         key={index+Math.random(100)} className="m-1 p-1 slots d-flex align-items-center justify-content-center " 
        style={{borderRadius:'50%',
        width:'20px',height:'20px',zIndex:'100',
       
        
        }} >
          {slot.id}
        </div>
        else return null
     })}
     </div>
      </div>
     }) }
     </div>
      <div className="counter-container d-flex flex-md-row  align-items-center justify-content-between my-4 flex-wrap">
        <div className="counter1 d-flex flex-column align-items-start justify-content-center  my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Adult
          </h6>
          <Counter />
        </div>
        <div className="counter2 d-flex flex-column align-items-start justify-content-center my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Children
          </h6>
          <Counter />
        </div>
        <div className="counter2 d-flex flex-column align-items-start justify-content-center my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Infant
          </h6>
          <Counter />
        </div>
      </div>
      <div className="button-container d-flex justify-content-center">
        <Link to="./book-now" className="w-100">
          <Button
            className="mx-1 w-100"
            style={{
              backgroundColor: "#1EFFAC",
              color: "white",
              border: "1px solid white",
              padding: "0.75rem 1.4rem",
              borderRadius: "3rem",
              boxShadow: "none",
            }}
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
