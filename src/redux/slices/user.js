import { createSlice } from "@reduxjs/toolkit";
import {message} from '../../fireabse'
import axios from "../../axios";
const initialState = {
  isLoading: false,
  error: false,
  user:null,
 validation:null,
 fcmtoken:null,
};

const slice = createSlice({
  name: "user",
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
   userdetails(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },

    validate(state, action) {
      state.isLoading = false;
      state.validation = action.payload;
    },
    validateuserdata(state, action) {
      state.isLoading = false;
      if(action.payload===1)
      state.user.user.emailVerified = true
      if(action.payload===2)
      state.user.user.phoneVerified = true
    },

    nulluser(state, action) {
      state.user = null
    },

    fcmtokenupdate(state, action) {
      state.user.fcmtoken = action.payload
    },
 
    settingtokens(state,action){
      state.user.tokens=action.payload
    }
   
  },
});

// Reducer
export default slice.reducer;


export const login=(un,pass)=>{
return async (dispatch)=>{
  return await axios({
  method: 'post',
  url: '/api/v1/auth/login',
  data:{
    "userName": un,
    "password": pass
  }
}).then(async (res)=>{
  console.log(res)
  dispatch(slice.actions.userdetails(res.data.data))
message.getToken({vapidKey:'BOIjFPKNQYl0YHeWETsCqh0Fh9UbTG4V9EalDPldQ9IBCdZyShSi8WG0dipZX4mvC7Zc0GzPK9QsVCxivhDdelk'})
.then(async(currentoken)=>{
console.log(currentoken);
dispatch(slice.actions.fcmtokenupdate(currentoken))

await axios({
  method: 'put',
  url: '/api/v1/auth/token/fcm/update',
 data:{fcmToken:currentoken}
}).then((res)=>{
  console.log(res)
 
})

}).catch((err)=>{
  console.log(err)
})


      })
}
}


export const logout=(token)=>{
  console.log(token)
  return async (dispatch)=>{
    return await axios({
    method: 'post',
    url: '/api/v1/auth/logout',
   
  }).then((res)=>{
    console.log(res)
  dispatch(slice.actions.userdetails(null))
  
        })
  }
  }

  export const phoneandemailv=(type,uuid)=>{
    return async (dispatch)=>{
      return await axios({
      method: 'post',
      url: '/api/v1/user/verification/token/request',
    data:{
      userName:uuid,
      type:type
    }
    }).then((res)=>{
      console.log(res.data.data)
    dispatch(slice.actions.validate(res.data.data))
    
          })
    }
    }

    export const validate=({userId,verificationId},token,type)=>{
      return async (dispatch)=>{
        return await axios({
        method: 'post',
        url: '/api/v1/user/verification/token/validate',
      data:{
        userId,
        verificationId,
        token,
      }
      }).then((res)=>{
        console.log(res)
      dispatch(slice.actions.validate(null))

      dispatch(slice.actions.validateuserdata(type))
      
            })
      }
      }
  
      export const nulluser=()=>{
        return async (dispatch)=>{
         console.log("wowo")
        dispatch(slice.actions.nulluser(null))
  
       
        }
        }

        export const renewtoken=(token)=>{
          return async (dispatch)=>{
            return await axios({
            method: 'put',
            url: '/api/v1/auth/token/access/renew',
          data:{
           fcmToken:token,
          }
          }).then((res)=>{
            console.log(res)
      
          dispatch(slice.actions.settingtokens(res.data.data.tokens))
                })
          }
          }