import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
 
  listing:null,
 
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
   listing(state, action) {
      state.isLoading = false;
      state.listing = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;


export const getlisting=()=>{
return async (dispatch)=>{
  return await axios({
  method: 'get',
  url: '/api/v1/venue/viewall/public',
  
}).then(async (res)=>{
  console.log(res)
  dispatch(slice.actions.listing(res.data))

      })
}
}

