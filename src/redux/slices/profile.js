import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar, updateverificationsettings} from './user'
const initialState = {
 
 profile:null,
 verificationstate:null

};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   profiledetail(state, action) {
     
      state.profile = action.payload;
    },
    verificationstate(state, action) {
     
      state.verificationstate = action.payload;
    },
  
  },
});

// Reducer
export default slice.reducer;


export const getprofiledetails=(data)=>{
return async (dispatch)=>{
  return await axios({
  method: 'get',
  url: '/api/v1/customer/view',
 
}).then(async (res)=>{
 dispatch(slice.actions.profiledetail(res.data.data))
      }).catch((err)=>{
       dispatch(opensnackbar("error",err?.response?.data?.details)) 
      })
}
}


export const updateprivacysettings=(data)=>{
    return async (dispatch)=>{
      return await axios({
      method: 'put',
      url: 'api/v1/user/profile/update',
      data:data
     
    }).then(async (res)=>{
        console.log(res.data.data)
        dispatch(updateverificationsettings(res.data.data.user))
        dispatch(opensnackbar("success","Settings Updated")) 
         dispatch(slice.actions.verificationstate(res.data.data))
          }).catch((err)=>{
           dispatch(opensnackbar("error",err?.response?.data?.message)) 
          })
    }
    }

    export const updategeneralsettings=(data)=>{
        return async (dispatch)=>{
          return await axios({
          method: 'put',
          url: '/api/v1/customer/update',
         data:data
        }).then(async (res)=>{
          dispatch(updateverificationsettings(res.data.data.user))
          dispatch(opensnackbar("success","Settings Updated")) 
              }).catch((err)=>{
                debugger
               dispatch(opensnackbar("error",err?.response?.data?.message)) 
              })
        }
        }
    
        export const setverificationstate=(data)=>{
          return async (dispatch)=>{
          dispatch(slice.actions.verificationstate(data))
          }}
      


