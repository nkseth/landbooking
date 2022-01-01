/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { createblock, Updateblock, viewblock } from "../../redux/slices/slotmanagement";

const LBModal = (props) => {
const [finalobject,setfinalobject]=useState(
    {
        from: {
          date: "",
          time: ""
        },
        to: {
          date: "",
          time: ""
        },
        
        alterReservations:false
      })
  const dispatch=useDispatch()
  const[slotss,setslotss]=useState([]) 
 React.useEffect(()=>{
 if(props.show){

 // dispatch(getcurrentslotdetials(props.id))
 }
  
},[props.show])
const [slot,setslot]=React.useState([])
React.useEffect(()=>{
    if(props.edit){
     setfinalobject(
        {
            from: {
              date: props.from.split(" ")[0],
              time: props.from.split(" ")[1]
            },
            to: {
              date:props.to.split(" ")[0],
              time:props.to.split(" ")[1] 
            },
            
            alterReservations:false
          })
     if(props.editslots){
         setslot(props.editslots)
     }   
    }

},[props.edit])

const onchangedate=(type,date)=>{
    if(type===1){
        const oldobj={...finalobject}
        const oldobj2={...oldobj.from}
        oldobj2["date"]=date
        oldobj.from=oldobj2
        setfinalobject({...oldobj})
      
    }
    if(type===2){
        const oldobj={...finalobject}
        const oldobj2={...oldobj.to}
        oldobj2["date"]=date
        oldobj.to=oldobj2
        setfinalobject({...oldobj})
      
    }
}
const onchangetime=(type,time)=>{
    if(type===1){
        const oldobj={...finalobject}
        const oldobj2={...oldobj.from}
        oldobj2["time"]=time
        oldobj.from=oldobj2
        setfinalobject({...oldobj})
      
    }
    if(type===2){
        const oldobj={...finalobject}
        const oldobj2={...oldobj.to}
        oldobj2["time"]=time
        oldobj.to=oldobj2
        setfinalobject({...oldobj})
   
    }
}

const datearray=["00:00","01:00","02:00","03:00","04:00","05:00","06:00",
"07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00",
"16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"
]





const submit=()=>{
if(slot?.length>0){
    let final={...finalobject,slots:slot}
    if(props.edit) dispatch(Updateblock(props.id,props.bid,final)) 
   else dispatch(createblock(props.id,final))
   
}else {
    if(props.edit) {dispatch(Updateblock(props.id,finalobject))}
    else dispatch(createblock(props.id,props.bid,finalobject))
}
setTimeout(()=>{
    dispatch(viewblock(props.id))
},1000)

     setfinalobject( {
    from: {
      date: "",
      time: ""
    },
    to: {
      date: "",
      time: ""
    },
    
    alterReservations:false
  })
props.close()
}

const addoremovesolt=(slott)=>{
    const p=[...slot]
    if(p.includes(slott)){
    p.splice(p.indexOf(slott), 1)
    }else{
        p.push(slott)
    }

    setslot([...p])
}



React.useEffect(()=>{
    const papi=[]
if(props.slot){
    for(let i=1;i<=4;i++){
        papi.push(i)
    }
setslotss([...papi])
}
},[props.slot])

const avitchange=(value)=>{
    let local={...finalobject}
    local["alterReservations"]=value
    setfinalobject({...local})
}

  return (
    <>
  

      <Modal
        size="lg"
        show={props.show}
        onHide={() => {props.close()}}
      
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontWeight: 400 }}
          >
          {props.edit?"Edit Bock":"Add a block"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <div>
           
           <div className="d-flex flex-wrap">
         
           <div className="col-md-6 ">
                <label>Alter Reservations</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                 value={finalobject.alterReservations} 
                   onChange={(e)=>{avitchange(e.target.value)}}
                  
                >
                
                  <option  value={false}>False</option>
                  <option  value={true}>True</option>
                  
                </select>
              </div>
              <div className="col-md-6 px-1 d-flex justify-content-center align-items-center "> 
              {props.slot===null?null:
            <div className=" d-flex justify-content-center align-items-center p-2">
             <p style={{marginBottom:0}}>Slots to block</p>
                {slotss.map((item)=>{
                        return <div style={{padding:'5px',borderRadius:'10px',border:'1px solid #1effac',margin:'5px'
                        ,maxHeight:'fit-content',display:'flex',justifyContent: 'center',alignItems:'center',width:'30px',height:'30px'
                        ,cursor:'pointer',background:slot.includes(item)?"#1effac":"none",userSelect:'none',
                        color:slot.includes(item)?"white":"grey"
                        }} onClick={()=>{addoremovesolt(item)}}>
                            {item}
                        </div>
                })}
                </div>}
              </div>
             <div className="col-12 p-1 d-flex flex-wrap">
             <div className="col-md-2 p-1 d-flex justify-content-center align-items-center">
   <h6>FROM</h6>
 </div>

                <div className="col-md-5 p-1">
   <label>Date</label>
   <input type="date" className="form-control" 
          value={finalobject?.from.date} 
         onChange={(e)=>{onchangedate(1,e.target.value)}}
   />
 </div>
 {console.log(finalobject?.from?.time)}
 <div className="col-md-5 p-1">
                <label>Time</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
              value={finalobject?.from?.time} 
               onChange={(e)=>{onchangetime(1,e.target.value)}}
                  
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
   <h6>TO</h6>
 </div>
              <div className="col-md-5 p-1">
   <label>Date</label>
   <input type="date" className="form-control" 
 value={finalobject?.to?.date} 
 onChange={(e)=>{onchangedate(2,e.target.value)}}
    
   />
 </div>
 
 <div className="col-md-5 p-1 ">
                <label>Time</label>
                <select data-placeholder="Choose Category"  className="form-control chosen-select"
                value={finalobject?.to?.time} 
                onChange={(e)=>{onchangetime(2,e.target.value)}}
                   
                  
                >
                  <option  value={""}>Select Time</option>
                {
                  
                datearray.map((item)=>{
                 return <option key={item} value={item}>{item}</option>
                })
                }
                  
                 
                  
                </select>
              </div>
 </div>
 
           </div>

</div>
      <Button onClick={submit}>Submit</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LBModal;
