import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import {opensnackbar, updateverificationsettings} from './user'
const initialState = {
 
 profile:null,

};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   profiledetail(state, action) {
     
      state.profile = action.payload;
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
        dispatch(updateverificationsettings())
    //  dispatch(slice.actions.profiledetail(res.data.data))
          }).catch((err)=>{
           dispatch(opensnackbar("error",err?.response?.data?.message)) 
          })
    }
    }

    export const updategeneralsettings=(data)=>{
        return async (dispatch)=>{
          return await axios({
          method: 'get',
          url: '/api/v1/customer/view',
         
        }).then(async (res)=>{
         dispatch(slice.actions.profiledetail(res.data.data))
              }).catch((err)=>{
               dispatch(opensnackbar("error",err?.response?.data?.message)) 
              })
        }
        }
    


