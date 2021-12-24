import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar} from './user'
const initialState = {
 
 notification:null
};

const slice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   reservations(state, action) {
      state.isLoading = false;
      state.listing = action.payload;
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
 
 dispatch(opensnackbar("success","Booking request submitted successfully")) 
      }).catch((err)=>{
        opensnackbar("error",err?.response?.data?.message) 
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
