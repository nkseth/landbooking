import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
 
  listing:null,
 listingdetails:null
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
    listingdetails(state, action) {
      state.isLoading = false;
      state.listingdetails = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;


export const getlistingprivate=()=>{
return async (dispatch)=>{
  return await axios({
  method: 'get',
  url: '/api/v1/venue/viewall/',
  
}).then(async (res)=>{
 console.log("dasdasdasd",res)
  dispatch(slice.actions.listing(res.data.data))

      })
}
}


export const getlistingpublic=()=>{
  return async (dispatch)=>{
    return await axios({
    method: 'get',
    url: '/api/v1/venue/viewall/public',
    
  }).then(async (res)=>{
   console.log("dasdasdasd",res)
    dispatch(slice.actions.listing(res.data.data))
  
        })
  }
  }

  export const viewdetailsprivate=(id)=>{
    return async (dispatch)=>{
      return await axios({
      method: 'get',
      url: `/api/v1/venue/${id}/view`,
      
    }).then(async (res)=>{
     console.log("dasdasdasd",res)
      dispatch(slice.actions.listingdetails(res.data.data))
    
          })
    }
    }
    
    export const viewdetailspublic=(id)=>{
      return async (dispatch)=>{
        return await axios({
        method: 'get',
        url: `/api/v1/venue/${id}/view/public`,
        
      }).then(async (res)=>{
       console.log("dasdasdasd",res)
        dispatch(slice.actions.listingdetails(res.data.data))
      
            })
      }
      } 
  

