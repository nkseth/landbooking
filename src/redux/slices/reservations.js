import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar} from './user'
const initialState = {
 
 notification:null,
 reservationdetails:null
};

const slice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   reservations(state, action) {
     
      state.reservationdetails = action.payload;
    },
    notification(state, action) {
      
        state.notification = action.payload;
      },
  
  },
});

// Reducer
export default slice.reducer;


export const requestreservation=(data)=>{
return async (dispatch)=>{
  return await axios({
  method: 'post',
  url: '/api/v1/reservation/request',
  headers: {'Content-Type': 'application/json'},
  data:JSON.stringify(data)
}).then(async (res)=>{
 console.log("dasdasdasd",res)
 dispatch(slice.actions.reservations(data))
 dispatch(opensnackbar("success","Booking request submitted successfully")) 
      }).catch((err)=>{
       dispatch(opensnackbar("error",err?.response?.data?.details)) 
      })
}
}


export const notification =(data)=>{
    return (dispatch)=>{
        dispatch(slice.actions.notification(data))
    }
}

export const EmptyNotification =()=>{
    return (dispatch)=>{
        dispatch(slice.actions.notification(null))
    }
}

export const EmptyReservation =()=>{
  return (dispatch)=>{
      dispatch(slice.actions.reservations(null))
  }
}

export const confirmreservation=(token,rid,vid)=>{
  return async (dispatch)=>{
    return await axios({
    method: 'post',
    url: `api/v1/reservation/confirm/${rid}`,
    headers: {'Content-Type': 'application/json'},
    data:JSON.stringify({venueId:vid,stripetoken:token.id})
  }).then(async (res)=>{
   console.log("dasdasdasd",res)
 
   dispatch(opensnackbar("success","Booking Confirmed")) 
        }).catch((err)=>{
         dispatch(opensnackbar("error",err?.response?.data?.details)) 
        })
  }
  }