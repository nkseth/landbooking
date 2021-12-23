/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import Multidatepicker from "./multidatepicker";
import moment from "moment";

const Reservation = ({data}) => {
const [avaliabletime,setavaliabletime]=React.useState({})
const [selectedate,setselecteddate]=React.useState([])
const [selectedatec,setselecteddatec]=React.useState([])
const [selectdsalotff,setlectdsalotff]=React.useState([])
const [selecttime,setselectitme]=React.useState([])
const [avv,setavv]= React.useState(true)
const [allslotarry,setallslotarry]=React.useState([])
const [finalslot,setfinalslot]=React.useState([])

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

  },[selectedatec])

  React.useEffect(()=>{
    const firstdateelement=avaliabletime[0]
  
    const timeslot=[]
    console.log(firstdateelement)
    if(avaliabletime.length>1){
      let helo=false
      // avaliabletime.map((item)=>{
      //   firstdateelement.intervals.map((it)=>{
      //           item.intervals.map((i)=>{
      //                 if(it.status===1){
      //                  if( i.status===1 && it===i){
      //                       timeslot.push(it)
      //                  }
      //                 }
      //           })
      //   })
      //  })

      firstdateelement.intervals.map((fi)=>{
        helo=false
        avaliabletime.map((at)=>{
                  at.intervals.map((int)=>{
                      if(fi.time===int.time && fi.status===1 && int.status===1) helo=true 
                  })
        })

        if(helo===true)
        timeslot.push(fi)
      })

      console.log("woho",timeslot)
    }
    else{
      avaliabletime[0]?.intervals.map((itw)=>{
          if(itw.status===1){
              timeslot.push(itw)
          }
      })
      setlectdsalotff(timeslot)
    }
    
    console.log(timeslot)
    setlectdsalotff(timeslot)
   
     },[avaliabletime])

React.useEffect(()=>{
 const tempslot=[]
console.log(selecttime)
selecttime.map((time)=>{
  selectdsalotff.map((slots)=>{
    if(time===slots.time) tempslot.push(slots.slots)
  })
})
console.log(tempslot)
let finalslot=[]
if(tempslot.length>0){
  let helo=false
  let firstlements=tempslot[0]
 
  firstlements.map((fs)=>{

    helo=false
      tempslot.map((item)=>{
          item.map((s)=>{
              if(fs.id===s.id && fs.status===1 && s.status===1) helo=true
          })
      })
      if(helo===true) finalslot.push(fs)
  })

  console.log("assdazsdassdasd",finalslot)
  setallslotarry(finalslot)
}
else{
  setallslotarry(tempslot)
}

},[selecttime])

const ontimeselection=(time)=>{
  console.log("wo")
const temp=selecttime
if(temp.includes(time))
{
  temp.splice(temp.indexOf(time),1)
  setselectitme([...temp])
} else{
  temp.push(time)
  setselectitme([...temp])
}
}

const onslotselection=(slot)=>{
  console.log("wo")
const temp=finalslot
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

const Booknow=()=>{

console.log(selectedatec)
console.log(selecttime)
console.log(finalslot)


   const schedules= selectedatec.map((item)=>{ return {date:item ,intervals:selecttime}})
   console.log(schedules)
}


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
          {
            selectedate?.map((item)=>{
              return <div style={{padding:'5px 8px',borderRadius:'50px',border:'1px solid #1effac',margin:'5px',
              color:'white',backgroundColor:'#1effac'
              }}>
              {moment(item).format('YYYY/MM/DD')}
               </div>
            })
          }
        </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap"> 
      {avv? <p className="d-flex w-100 align-items-center justify-content-center">Please Select time</p>:
       <p className="d-flex w-100 align-items-center justify-content-center">No Slot avalable for the dates</p>
      }
   
     {selectdsalotff?.map((item,index)=>{
    
      return <div key={index}
        className=" d-flex align-items-center flex-column"
        style={{ color: selecttime.includes(item.time)?'white':"#334E6F", fontSize: "14px",
        border:'1px solid #1effac ',margin:'10px',padding:'3px', 
      cursor:'pointer',borderRadius:'10px',backgroundColor:selecttime.includes(item.time)?"#1effac":'white',
      }}
      onClick={()=>{ontimeselection(item.time)}}
      >
     
        {item.time}
        
        
      </div>
     }) }


     </div>

     <div className="d-flex justify-content-center align-items-center flex-wrap"> 
      <p className="d-flex w-100 align-items-center justify-content-center">Please Select slots</p>
   
   
     {allslotarry?.map((item,index)=>{
    
      return <div key={index}
        className=" d-flex align-items-center flex-column justify-content-center"
        style={{ color: finalslot.includes(item.id)?'white':"#334E6F", fontSize: "14px",
        border:'1px solid #1effac ',margin:'10px',width:'20px',height:'20px',
      cursor:'pointer',borderRadius:'10px',backgroundColor:finalslot.includes(item.id)?"#1effac":'white',
      }}
      onClick={()=>{onslotselection(item.id)}}
      >
     
        {item.id}
        
        
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
            Book Now
          </Button>
       
      </div>
    </div>
  );
};

export default Reservation;
