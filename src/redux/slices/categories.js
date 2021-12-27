import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
 
  categories:null,
 
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // START LOADING
   
    // GET PRODUCTS
   category(state, action) {
    
      state.categories = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;


export const getcategory=()=>{
return async (dispatch)=>{
  return await axios({
  method: 'get',
  url: '/api/v1/category/viewall',

  
}).then(async (res)=>{
  
  dispatch(slice.actions.category(res.data.data))

      })
}
}

export const getcategorypublic=()=>{
  return async (dispatch)=>{
    return await axios({
    method: 'get',
    url: '/api/v1/category/viewall/public',
  
    
  }).then(async (res)=>{
    
    dispatch(slice.actions.category(res.data.data))
  
        })
  }
  }
  

