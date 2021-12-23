import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar} from './user'
const initialState = {
 
  listing:null,
 listingdetails:null,
 hostedlisting:null,
 reviews:null
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
  
  },
});

// Reducer
export default slice.reducer;


export const requestreservation=(data)=>{
return async (dispatch)=>{
  return await axios({
  method: 'get',
  url: '/api/v1/reservation/request',
  data:data
}).then(async (res)=>{
 console.log("dasdasdasd",res)
  dispatch(slice.actions.listing(res.data.data))

      }).catch((err)=>{
        opensnackbar("error",err?.response?.data?.message) 
      })
}
}

