import Button from '@restart/ui/esm/Button'
import React from 'react'
import {logout} from '../../redux/slices/user'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import './log.css'

const Logout=()=>{
  const state=useSelector((state) => state.user)
  const [open,setopen]=React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll",()=>{
        console.log("safsdf")
        setopen(false)
    })

    window.addEventListener('mousedown', (event)=>{
      console.log(event.target.id)
      if(event.target.id!=="sol" || event.target.id!=="main")
      setopen(false)
    })


    return ()=>{
        window.removeEventListener("scroll",()=>{})
        window.removeEventListener("mousedown",()=>{})
    }
  },[])

const dispatch=useDispatch()
    return(
        <div  style={{ backgroundColor: "#1effac"}}   onMouseLeave={()=>{setopen(false)}}>
           <Button className="btn"
           onMouseEnter={()=>{setopen(true)}}
         
        variant="btn"
        style={{
          height: "100%",
         
          padding: "12px 50px",
          
          color: "white",
          boxShadow: "none",
          fontSize: "14px",
          borderRadius: 0,
          border:'none',
          display:'flex',
          textTransform:'capitalize',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      
      >
        
       <Avatar style={{marginRight:'5px'}} src={`https://yardcan.riolabz.com/${state.user.user.displayImage.path}`}/> {state?.user?.user?.displayName}
      </Button>

      <div id="sol"
      onMouseLeave={()=>{setopen(false)}}
      className="ggi" style={{width:'250px',height:'300px',backgroundColor:'white',
      
      position:'absolute',top:open?'55px':'20px',right:'0px',transition:'.7s ease-out',
      opacity:open?'1':'0',borderRadius:'10px 0px 0px 10px',
      zIndex:open?'1000':'-100'
      
      }}>
        <div style={{padding:'10px 15px',display:'flex',justifyContent: "center",alignItems:'flex-start',flexDirection:'column'}}>
      
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid lightgray',fontWeight:'bold',color:'lightgray'}}
        to='/addlisting'>Add Listing</Link>
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid lightgray',fontWeight:'bold',color:'lightgray'}}
        to='/userlisting'>Manage Listing</Link>
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid lightgray',fontWeight:'bold',color:'lightgray'}}
        to='/bookings'>Booking</Link>
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid lightgray',fontWeight:'bold', color:'lightgray'}}
        to='/editprofile'>Profile Edit</Link>
        <div  className="link"
          onClick={()=>{dispatch(logout(state.user.tokens.access))}}
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #BFD1E5',fontWeight:'bold', 
        color:'lightgray',cursor:'pointer'}}
        to='/addlisting'>Logout</div>

        </div>

      </div>
</div>
        
    )
}
export default Logout