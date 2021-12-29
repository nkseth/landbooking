/* eslint-disable no-sparse-arrays */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {  DeleteTwoTone,  } from "@mui/icons-material";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import { opensnackbar } from "../../../redux/slices/user";

const LBModal = (props) => {

  const dispatch=useDispatch()


const user=useSelector((state) => state.user)
const data=useSelector((state)=>state.user)

const [to,setto]=React.useState([])
const [from,setfrom]=React.useState([])
const days=[{name:'Monday',value:1},
{name:'Tuesday',value:2},
{name:'Wednesday',value:3},
{name:'Thuesday',value:4},
{name:'Friday',value:5},
{name:'Saturday',value:6},
{name:'Sunday',value:7}
]

const [addonce,setaddonce]=React.useState([])

const onToselect=(ei,toi)=>{
      const hello=[...to]
      hello[ei]=toi
      setto([...hello])
      debugger
}
const onFromselect=(ei,fromi)=>{
  const hello=[...from]
  hello[ei]=fromi
  setfrom([...hello])
}

const addinteval=(index)=>{
  
  const toi=to[index]
  const fromi=from[index]
  if(parseInt(toi[0]+toi[1])<parseInt(fromi[0]+fromi[1]) ||(parseInt(toi[0]+toi[1])===23 && parseInt(fromi[0]+fromi[1])===0) ){
    if(toi && fromi){
      const olddata=[...addonce]
      let oldinteval= [...olddata[index].intervals]
      oldinteval.push({to:toi,from:fromi})
      olddata[index]={...olddata[index],intervals:oldinteval}
    setaddonce([...olddata])
    debugger
    }
  }
  else dispatch(opensnackbar("error","please select a valid interval"))

   
}

const addate=(index,date)=>{
  const olddata=[...addonce]
  olddata[index]={...olddata[index],date:date}
setaddonce([...olddata])
}

const intervaldel=(index,index2)=>{
  
  const olddata=[...addonce]
      let oldinteval= [...olddata[index].intervals]
      oldinteval.splice(index2,1)
      olddata[index]={...olddata[index],intervals:oldinteval}
    setaddonce([...olddata])



   
}

const datearray=["00:00","01:00","02:00","03:00","04:00","05:00","06:00",
"07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00",
"16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"
]


const Once=({index})=>{
  return(
    <div className="d-flex mt-2 p-2 flex-wrap justify-content-center align-items-center" style={{border:'1px solid gray',borderRadius:'10px'}}>
             
    <div className="col-md-3 p-1">
   <label>Date</label>
   <input type="date" className="form-control" 
   value={addonce[index].date} 
    onChange={(e)=>{addate(index,e.target.value)}}
   />
 </div>
 

  
 <div className="col-md-3 p-2">
                <label>To</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                   value={to[index]} 
                  onChange={(e)=>{onToselect(index,e.target.value)}}
                  
                >
                  <option  value={""}>Select Time</option>
                {
                  
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                 
                  
                </select>
              </div>
              <div className="col-md-3 p-2">
                <label>From</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                  value={from[index]} 
                  onChange={(e)=>{onFromselect(index,e.target.value)}}
                >
                   <option  value={""}>Select Time</option>
                 {
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                </select>
              </div>
              <div className="col-md-2 p-1 d-flex justify-content-center align-items-center">
              <div style={{borderRadius:'10px',marginTop:'10px',
   color:'black',display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center',cursor:'pointer'}}
   onClick={()=>{addinteval(index)}}
   >
   <AddAlarmIcon/>
   <p style={{fontSize:8,marginBottom:0}}>Add Interval</p>
   </div>
   <div  style={{borderRadius:'10px',marginLeft:'5px',
   color:'black',cursor:'pointer',display:'flex',justifyContent: 'center',
   flexDirection:'column',alignItems:'center'}} onClick={()=>{removeitem(index)}}>
  <DeleteTwoTone/>
  
  </div>
   </div>
   
 <div className="col-md-12 p-1 d-flex justify-content-start align-items-center">
   <div >
     <p style={{marginBottom:0}}>Added Intervals :-</p>
     <div className="p-2 text-center d-flex m-1 flex-wrap" >
      { console.log(addonce[index])}
        {addonce[index]?.intervals.map((item,index2)=>{
              return <div className="p-2 text-center d-flex m-1" style={{border:'1px solid pink',borderRadius:'10px'}}>
                
                 {item.to}-{item.from}
                 <div onClick={()=>{intervaldel(index,index2)}} style={{cursor:'pointer'}}>
                 <DeleteTwoTone />
              </div>
              </div>
        })}
     </div>
   </div>
 </div>

  </div>
  )
}

const addday=(index,day)=>{
  const all=[...addonce]
  const sper={...all[index]}
  if(sper.date.includes(day)){  
    const nor=[...sper.date]
    nor.splice(nor.indexOf(day),1)
    sper.date=nor
  }else{
    const nor=[...sper.date]
    nor.push(day)
    sper.date=nor
  }
  all[index]=sper
  setaddonce([...all])
  
}


const Weeklyrepeat=({index})=>{
  return(
    <div className="d-flex mt-2 p-2 flex-wrap justify-content-center align-items-center" style={{border:'1px solid gray',borderRadius:'10px'}}>
             
    <div className="col-md-12 p-1 d-flex justify-content-around">
   
   {days.map((item,index2)=>{
      return <div style={{padding:8,border:'1px solid #1effac',borderRadius:'10px',cursor:'pointer',
      backgroundColor:addonce[index].date.includes(item.value)?"#1effac":'white',
      color:addonce[index].date.includes(item.value)?"white":'gray',
      }}
      onClick={()=>{addday(index,item.value)}}
      >
        {item.name}
      </div>
   })}
 </div>
 

  
 <div className="col-md-3 p-2">
                <label>To</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                   value={to[index]} 
                  onChange={(e)=>{onToselect(index,e.target.value)}}
                  
                >
                  <option  value={""}>Select Time</option>
                {
                  
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                 
                  
                </select>
              </div>
              <div className="col-md-3 p-2">
                <label>From</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                  value={from[index]} 
                  onChange={(e)=>{onFromselect(index,e.target.value)}}
                >
                   <option  value={""}>Select Time</option>
                 {
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                </select>
              </div>
              <div className="col-md-2 p-1 d-flex justify-content-center align-items-center">
              <div style={{borderRadius:'10px',marginTop:'10px',
   color:'black',display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center',cursor:'pointer'}}
   onClick={()=>{addinteval(index)}}
   >
   <AddAlarmIcon/>
   <p style={{fontSize:8,marginBottom:0}}>Add Interval</p>
   </div>
   <div  style={{borderRadius:'10px',marginLeft:'5px',
   color:'black',cursor:'pointer',display:'flex',justifyContent: 'center',
   flexDirection:'column',alignItems:'center'}} onClick={()=>{removeitem(index)}}>
  <DeleteTwoTone/>
  
  </div>
   </div>
   
 <div className="col-md-12 p-1 d-flex justify-content-start align-items-center">
   <div >
     <p style={{marginBottom:0}}>Added Intervals :-</p>
     <div className="p-2 text-center d-flex m-1 flex-wrap" >
      { console.log(addonce[index])}
        {addonce[index]?.intervals.map((item,index2)=>{
              return <div className="p-2 text-center d-flex m-1" style={{border:'1px solid pink',borderRadius:'10px'}}>
                
                 {item.to}-{item.from}
                 <div onClick={()=>{intervaldel(index,index2)}} style={{cursor:'pointer'}}>
                 <DeleteTwoTone />
              </div>
              </div>
        })}
     </div>
   </div>
 </div>

  </div>
  )
}

const customrepeat=({index})=>{
  return(
    <div className="d-flex mt-2 p-2 flex-wrap justify-content-center align-items-center" style={{border:'1px solid gray',borderRadius:'10px'}}>
             
    <div className="col-md-12 p-1 d-flex justify-content-around">
   
   {days.map((item,index2)=>{
      return <div style={{padding:8,border:'1px solid #1effac',borderRadius:'10px',cursor:'pointer',
      backgroundColor:addonce[index].date.includes(item.value)?"#1effac":'white',
      color:addonce[index].date.includes(item.value)?"white":'gray',
      }}
      onClick={()=>{addday(index,item.value)}}
      >
        {item.name}
      </div>
   })}
 </div>
 

  
 <div className="col-md-3 p-2">
                <label>To</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                   value={to[index]} 
                  onChange={(e)=>{onToselect(index,e.target.value)}}
                  
                >
                  <option  value={""}>Select Time</option>
                {
                  
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                 
                  
                </select>
              </div>
              <div className="col-md-3 p-2">
                <label>From</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                  value={from[index]} 
                  onChange={(e)=>{onFromselect(index,e.target.value)}}
                >
                   <option  value={""}>Select Time</option>
                 {
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                </select>
              </div>
              <div className="col-md-2 p-1 d-flex justify-content-center align-items-center">
              <div style={{borderRadius:'10px',marginTop:'10px',
   color:'black',display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center',cursor:'pointer'}}
   onClick={()=>{addinteval(index)}}
   >
   <AddAlarmIcon/>
   <p style={{fontSize:8,marginBottom:0}}>Add Interval</p>
   </div>
   <div  style={{borderRadius:'10px',marginLeft:'5px',
   color:'black',cursor:'pointer',display:'flex',justifyContent: 'center',
   flexDirection:'column',alignItems:'center'}} onClick={()=>{removeitem(index)}}>
  <DeleteTwoTone/>
  
  </div>
   </div>
   
 <div className="col-md-12 p-1 d-flex justify-content-start align-items-center">
   <div >
     <p style={{marginBottom:0}}>Added Intervals :-</p>
     <div className="p-2 text-center d-flex m-1 flex-wrap" >
      { console.log(addonce[index])}
        {addonce[index]?.intervals.map((item,index2)=>{
              return <div className="p-2 text-center d-flex m-1" style={{border:'1px solid pink',borderRadius:'10px'}}>
                
                 {item.to}-{item.from}
                 <div onClick={()=>{intervaldel(index,index2)}} style={{cursor:'pointer'}}>
                 <DeleteTwoTone />
              </div>
              </div>
        })}
     </div>
   </div>
 </div>

  </div>
  )
}



const removeitem=(i)=>{
const newobb=[...addonce]
newobb.splice(i,1)
setaddonce([...newobb])
}
const additem=(type)=>{
  switch(type){
    case 1:
      setaddonce([...addonce,{
        "date": "",
        "intervals": [],
        "type": 1
      }])
      break;
      case 2:
        setaddonce([...addonce,{
          "uuid": "",
          "date": [],
          "intervals": [],
          "type": 2
        }])
        break;
      default: 
     
  }
}
  return (
    <>
  

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close()}}
        static
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
          Manage schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <div>
           <div className="d-flex">
               <Button className="m-2 h-100" onClick={()=>{additem(1)}}>ADD ONCE</Button>
               <Button className="m-2 h-100" onClick={()=>{additem(2)}}>WEEKLY REPEAT</Button>
               <Button className="m-2 h-100">CUSTOM REPEAT</Button>
           </div>
                {addonce.map((item,index)=>{
                  if(item.type===1){
                      return <Once index={index}/>
                  }
                  if(item.type===2){
                    return <Weeklyrepeat index={index}/>
                }
                })}
              
           {props.id}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
