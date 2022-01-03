import Button from '@restart/ui/esm/Button'
import React from 'react'
import {logout} from '../../redux/slices/user'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'

import { baseurl } from '../../config'

const Logout=()=>{
  const state=useSelector((state) => state.user)
  const [open,setopen]=React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll",()=>{
    
        setopen(false)
    })

    // window.addEventListener('mousedown', (event)=>{
    
    //   if(event.target.id!=="sol" || event.target.id!=="main")
    //   setopen(false)
    // })


    return ()=>{
        window.removeEventListener("scroll",()=>{})
      
    }
  },[])

const dispatch=useDispatch()
    return(
        <div  style={{ backgroundColor: "#1effac"}} >
           <Button className="btn"
           onCLick={()=>{setopen(!open)}}
           onMouseEnter={()=>{setopen(true)}}  onMouseLeave={()=>{setopen(false)}}
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
      
       <Avatar style={{marginRight:'5px',border:'4px solid white'}} src={`${baseurl}${state.user?.user?.displayImage?.path}`}/> {state?.user?.user?.displayName}
     
       <div id="sol"
     
      className="ggi" style={{width:'250px',height:open?'auto':0,backgroundColor:'white',overflow:'hidden',
      
      position:'absolute',top:open?'55px':'20px',transition:'.5s ease-out',
      opacity:open?'1':'0',borderRadius:'10px 0px 0px 10px',
      zIndex:open?'1000':'-1000',right:0, boxShadow:'5px 0px 10px lightgray '
      
      }}>
       
        <div style={{padding:'10px 15px',display:'flex',
        justifyContent: "center",alignItems:'center',flexDirection:'column',borderRadius:'5px',
       
        }}>
      
        {state.user.user.host?
          <Link  
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #eeeeee',fontWeight:'bold'
        ,color:'gray',textAlign:'left'}}
        to='/addlisting'>Add Listing</Link>:null}
        {state.user.user.host?
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #eeeeee',fontWeight:'bold',color:'gray'
        ,textAlign:'left'
      }}
        to='/managelistings'>Manage Listing</Link>:null}
        <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #eeeeee',fontWeight:'bold',color:'gray'
        ,textAlign:'left'
      }}
        to='/mybookings'>My Bookings</Link>
          <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #eeeeee',fontWeight:'bold',color:'gray'
        ,textAlign:'left'
      }}
        to='/mytransactions'>My Transactions</Link>
         <Link  className="link"
        style={{padding:'10px',width:'100%',borderBottom:'1px solid #eeeeee',fontWeight:'bold',color:'gray'
        ,textAlign:'left'
      }}
        to='/myfavourite'>My Favourites</Link>
        <Link  className="link"
        style={{padding:'10px',width:'100%',fontWeight:'bold', color:'gray',textAlign:'left',borderBottom:'1px solid #eeeeee'}}
        to='/editprofile'>Profile Edit</Link>
       
        <div  className="link"
          onClick={()=>{dispatch(logout(state.user.tokens.access))}}
        style={{padding:'10px',width:'100%',fontWeight:'bold', textAlign:'left',
        color:'gray',cursor:'pointer'}}
        to='/addlisting'>Logout</div>

        </div>

      </div>
      </Button>

    
</div>
        
    )
}
export default Logout