import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { locationfind, locationfindll, locationlltz, locationnull } from '../../redux/slices/location'

const Locationstring=(props)=>{
    const location =useSelector((state) => state.location)
    const [locationstring,setlocationstring]=React.useState("") 
    const [displayauto,setdisplayauto]=React.useState(true)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(locationnull())
        if(locationstring!=="") dispatch(locationfind(locationstring))
        if(locationstring==="") dispatch(locationnull())
      },[locationstring])

 React.useEffect(()=>{
if(props?.dtype) setdisplayauto(props.dtype) 
 },[])

 React.useEffect(()=>{
  props?.getaddress &&props.onaddresschanging(locationstring)
 },[locationstring])
return (
    <div className={props.size?"col-sm-4":"col-sm-6"} style={{position:'relative'}}>
   {!props.label?<label>Address</label>:null}
    <input type="text" className="form-control" 
    placeholder="Search location"
    value={props?.default?props.default:locationstring}
     onChange={(e)=>{setlocationstring(e.target.value);}}
    onKeyDown={(e)=>{if(e.key==="Backspace"){setdisplayauto(true);dispatch(locationlltz())}}}
    />
      {
       (locationstring!=="" && displayauto) &&  
    <div style={{width:"90%",minHeight:'50px',position:'absolute',zIndex:'100',backgroundColor:'white',
  borderRadius:'10px',boxShadow:'0px 0px 15px lightgray',padding:'10px',display:'flex',justifyContent:'center',
  alignItems:'center'
  }}>
 
   
<div style={{padding:'5px',width:'100%'}}>

{  location?.locationstring?
location?.locationstring?.map((item)=>{
return <div style={{padding:'5px',borderBottom:'0.5px solid lightgray',width:'100%',
margin:'5px',cursor:'pointer'}} 
onClick={()=>{
setlocationstring(item);
setdisplayauto(false);
dispatch(locationfindll(item))
}} 
>
<label style={{cursor:'pointer'}}>{item}</label>
</div>
})
:'loading'
}
</div>

    </div>
}
  </div>
)
}
export default Locationstring