import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
 
  addedlisting:null,
 
};

const slice = createSlice({
  name: "popularlisting",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
   addlisting(state, action) {
      state.isLoading = false;
      state.listing = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;


export const addlisting=(fromdata)=>{
return async (dispatch)=>{
  return await axios({
  method: 'post',
  url: '/api/v1/venue/create',
  data:fromdata
  
}).then(async (res)=>{
  console.log("heloo listin is creted",res.data)
  

      })
}
}

