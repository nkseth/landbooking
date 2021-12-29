import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar} from './user'
const initialState = {
 
 currentdetails:null,
 
};

const slice = createSlice({
  name: "slotmanagement",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   setslots(state, action) {
     
      state.currentdetails = action.payload;
    },

  
  },
});

// Reducer
export default slice.reducer;








export const getcurrentslotdetials=(rid)=>{
  return async (dispatch)=>{
    return await axios({
    method: 'get',
    url: `api/v1/venue/${rid}/schedule/raw/view`,
    headers: {'Content-Type': 'application/json'},
    
  }).then(async (res)=>{
   console.log("dasdasdasd",res)
   dispatch(slice.actions.setslots(res.data.data))
 
        }).catch((err)=>{
        
         dispatch(opensnackbar("error",err?.response?.data?.message)) 
        })
  }
}

