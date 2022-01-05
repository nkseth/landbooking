/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import Counter from "../Counter/Counter";
import Notification from "../Modal/notification";
import Multidatepicker from "./multidatepicker";
import moment from "moment";
import {requestreservation,EmptyReservation, reschedulereservation} from '../../redux/slices/reservations'
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { EventSourcePolyfill } from "event-source-polyfill";
import { baseurl } from "../../config";
import {opensnackbar} from '../../redux/slices/user'
import { authmodalopen } from "../../redux/slices/profile";

const Reservation = ({data,id,history,setmo,resetdata,reservationid}) => {
const [avaliabletime,setavaliabletime]=React.useState([])
const [selectedate,setselecteddate]=React.useState([])
const [selectedatec,setselecteddatec]=React.useState([])
const [selecttime,setselectitme]=React.useState([])
const [avv,setavv]= React.useState(true)
const [allslotarry,setallslotarry]=React.useState([])
const [finalslot,setfinalslot]=React.useState([])
const user=useSelector((state) => state.user)
const reservation=useSelector((state) => state.reservartions)
const [edata,setedata]=React.useState(null)
const [guestlimit,setguestlimit]=React.useState({
  adults:0,infants:0,children:0
})

const guestchange=(type,name)=>{
console.log(data.guestLimit)
if(name==="adults"){
 
  if(type==="+"){
    console.log("dasdasd")
    if(guestlimit.adults<data.guestLimit.adults){
      setguestlimit({...guestlimit,adults:guestlimit.adults+1})
    }
  }
  if(type==="-"){
    if(guestlimit.adults>0){
      setguestlimit({...guestlimit,adults:guestlimit.adults-1})
    }
  }
}
if(name==="children"){
  if(type==="+"){
    if(guestlimit.children<data.guestLimit.children){
      setguestlimit({...guestlimit,children:guestlimit.children+1})
    }
  }
  if(type==="-"){
    if(guestlimit.children>0){
      setguestlimit({...guestlimit,children:guestlimit.children-1})
    }
  }
}

if(name==="infants"){
  if(type==="+"){
    if(guestlimit.infants<data.guestLimit.infants){
      setguestlimit({...guestlimit,infants:guestlimit.infants+1})
    }
  }
  if(type==="-"){
    if(guestlimit.infants>0){
      setguestlimit({...guestlimit,infants:guestlimit.infants-1})
    }
}
}
}
React.useEffect(()=>{
const  changed=[]
selectedate.map((item)=>{
 
changed.push(moment(item.toDate()).format('YYYY-MM-DD'))
})
setselecteddatec(changed)

},[selectedate])

React.useEffect(()=>{
 const  selecteddate=[]

 selectedatec.map((date)=>{
      data?.schedules.map((item)=>{
      
          if(item.date===date && item.status===1) selecteddate.push(item)
      })
 })

 setavaliabletime(selecteddate)
 
  if(selecteddate.length!==selectedatec.length) setavv(false) 
  else setavv(true)
console.log("first step",selecteddate)
setallslotarry([])
setfinalslot([])
setselectitme([])

  },[selectedatec])

const [eventtype,seteventtype]=React.useState(null)

const ontimeselection=(date,time)=>{
  console.log("wo")
let temp=[...selecttime]

if(temp.find((item)=>{if(item.date===date) return true}))
{ 
  let avindex
  temp.map((item,index)=>{if(item.date===date) avindex=index})
  console.log(avindex)
  if(temp[avindex].intervals.includes(time)){
    temp[avindex].intervals.splice(temp[avindex].intervals.indexOf(time),1)
    if(temp[avindex].intervals.length<1){temp.splice(avindex,1)}
  }
 
  else{
   
    let subarray={}
    const newdate=temp[avindex].date
    const oldarray=[...temp[avindex].intervals]
    oldarray.push(time)

    subarray={date:newdate,intervals:oldarray}
    temp.splice(avindex,1)
    temp.push(subarray)
  }
  setselectitme([...temp])
} else{
  temp.push({date:date,intervals:[time]})
  setselectitme([...temp])
}

console.log(temp)
}

React.useEffect(()=>{

  const tempslots=[]
  let clength=0
  selecttime.map((ii)=>{
    console.log(ii)
    clength= clength+ii.intervals.length
  })
console.log("wowo",clength)
avaliabletime.map((item)=>{
  selecttime.map((s)=>{
    if(item.date===s.date && item.status===1){
      item.intervals.map((i)=>{
            if(s.intervals.includes(i.time) && i.status===1){
                  i.slots.map((f)=>{
                      if(f.status===1){
                        tempslots.push(f.id)
                      }
                  })
            }
      })
    }
  })
 
})
console.log(tempslots)
const solo=[]
const frequencies=s=>{
  let fre=0
  tempslots.map((ss)=>{
if(ss===s) fre=fre+1 
  })
if(fre===clength){
  if(!solo.includes(s))
  solo.push(s)
}

}

tempslots.map((item)=>{
  frequencies(item)
})

setallslotarry(solo)
console.log("final",solo)

},[selecttime])

const onslotselection=(slot)=>{
  console.log("wo")
const temp=[...finalslot]
if(temp.includes(slot))
{
  temp.splice(temp.indexOf(slot),1)
  setfinalslot([...temp])
} else{

  temp.push(slot)
  setfinalslot([...temp])
}
console.log(temp)
}

React.useEffect(()=>{
if(eventtype!==null){
  if(eventtype==="payment")dispatch(opensnackbar("success","payment processing"))
  if(eventtype==="failed")dispatch(opensnackbar("success","booking processing Failed please retry"))
}
},[eventtype])

const dispatch=useDispatch()

const Booknow=()=>{

  let ifnoterror= true

  if(!user.user){
    ifnoterror=false
    dispatch(opensnackbar('error','please login to book a venue'))
    dispatch(authmodalopen(true))
  }
console.log(selecttime)
console.log(finalslot)
 const schedules= selecttime
  
   const slots=data.slots &&finalslot
   const guestList=guestlimit
   const venueId=id

console.log(schedules)
console.log(selectedatec)
if(schedules.length!==selectedatec.length) 
{dispatch(opensnackbar("error","Please Select time for every date selected "))
ifnoterror=false
}
if((data?.slots && slots.length<1) && ifnoterror) 
{dispatch(opensnackbar("error","Please Select Slot "))
ifnoterror=false
}


if(!guestList["adults"]>0 && ifnoterror){
  dispatch(opensnackbar("error","One Adult Guest is mandatory "))
ifnoterror=false
}

   if(!reservationid && ifnoterror) {
    if(slots){
      dispatch(requestreservation({schedules,slots,guestList,venueId}))
    }else dispatch(requestreservation({schedules,guestList,venueId}))
     
   }else if(reservationid && ifnoterror){
    if(slots){
      dispatch(reschedulereservation({schedules,slots,guestList,venueId},reservationid))
    }else dispatch(reschedulereservation({schedules,guestList,venueId},reservationid))
   }

  //  history.push(`/book-now/${id}`)
}
const [statusmodal,setmodal]=React.useState(false)
const onclose=()=>{
  setmodal(false)
 
  dispatch(EmptyReservation())
  seteventtype(null)
  resetdata()
  setallslotarry([])
  setfinalslot([])
  setselecteddate([])
  setselecteddatec([])
  setselectitme([])
}



 React.useEffect(()=>{
  if(reservation.reservationdetails){
    setmodal(true)
  }
  },[reservation.reservationdetails])
  
  
  return (
    <div
      className="Reservation-container p-3 py-4 my-4"
      style={{ boxShadow: "0px 0px 10px 1px rgb(71 85 95 / 8%)" }}
    >
        <Notification show={statusmodal} close={onclose}  id={id} data={edata} eventtype={eventtype}/>
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
         <p style={{marginBottom: "0",marginRight:'10px',width: "100%"}}>Please Select Date :-</p>
         <Multidatepicker
         value={selectedate}
         onChange={setselecteddate}
        style={{width:'100%',padding:'20px',marginTop:'10px',marginBottom:'10px'}}
          className="m-2 w-90 p-3 form-input"
          />
          
        </Form>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
   
        
        
        {avaliabletime?.map((item,index)=>{
        return <div className="d-flex justify-content-center align-items-center flex-column">
        <div  className="d-flex flex-column align-items-start justify-content-center my-3" style={{padding:'5px 8px',borderRadius:'50px',border:'1px solid #1effac',margin:'5px',
              color:'white',backgroundColor:'#1effac'
              }}>
             {item.date}
               </div>
<div className="d-flex justify-content-center align-items-center flex-wrap">
{ avv && item.intervals.map((intervals,index2)=>{
     
      return <div key={index2}
      className=" d-flex align-items-center flex-column"
      style={{ 
        color: selecttime.find((iteme)=>{if(iteme.date===item.date) {
          if(iteme?.intervals?.includes(intervals.time)) return true
}})?'white':"#334E6F",
       fontSize: "14px",
      border:'1px solid #1effac ',margin:'10px',padding:'3px', 
    cursor:'pointer',borderRadius:'10px',
    backgroundColor:selecttime.find((iteme)=>{if(iteme.date===item.date) {
                if(iteme?.intervals?.includes(intervals.time)) return true
    }})?"#1effac":'white'
    }}
    onClick={()=>{ontimeselection(item.date,intervals.time)}}
    >
   
      {intervals.time}
      
      
    </div>
    })
    }
</div>

          </div>     


   }) }

        </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap"> 
     
     

   
  


     </div>

     <div className="d-flex justify-content-center align-items-center flex-wrap"> 
     {!avv && <p className="d-flex w-100 align-items-center justify-content-center">No Slot avalable for these dates Please Change Dates to get Slots</p>}
     { (avv && data?.slots) && allslotarry?.length>0 && <p className="d-flex w-100 align-items-center justify-content-center">Please Select slots</p>}
   
 
     {(avv && data?.slots) && allslotarry?.map((item,index)=>{
    
      return <div key={index}
        className=" d-flex align-items-center flex-column justify-content-center"
        style={{ color: finalslot.includes(item)?'white':"#334E6F", fontSize: "14px",
        border:'1px solid #1effac ',margin:'10px',width:'20px',height:'20px',
      cursor:'pointer',borderRadius:'10px',backgroundColor:finalslot.includes(item)?"#1effac":'white',
      }}
      onClick={()=>{onslotselection(item)}}
      >
     
        {item}
        
        
      </div>
     }) }

     
     </div>
     
      <div className="counter-container d-flex flex-md-row  align-items-center justify-content-between my-4 flex-wrap">
        <div className="counter1 d-flex flex-column align-items-start justify-content-center  my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Adult
          </h6>
          <Counter guestchange={guestchange}  state={guestlimit} name="adults"/>
        </div>
        <div className="counter2 d-flex flex-column align-items-start justify-content-center my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Children
          </h6>
          <Counter guestchange={guestchange}  state={guestlimit} name="children"/>
        </div>
        <div className="counter2 d-flex flex-column align-items-start justify-content-center my-3">
          <h6 className="mb-3" style={{ color: "#334E6F" }}>
            Infants
          </h6>
          <Counter guestchange={guestchange}  state={guestlimit} name="infants"/>
        </div>
      </div>
      <div className="button-container d-flex justify-content-center">
       
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
            onClick={Booknow}
          >
            {reservationid?"Reschedule":"Book Now"}
          </Button>
       
      </div>
    </div>
  );
};

export default withRouter(Reservation);
