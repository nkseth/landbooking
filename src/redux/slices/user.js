import { createSlice } from "@reduxjs/toolkit";
import {message} from '../../fireabse'
import axios from "../../axios";
const initialState = {
  isLoading: true,
  error: false,
  user:null,
 validation:null,
 fcmtoken:null,
 snackbar:null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },

    // HAS ERROR
  

    // GET PRODUCTS
   userdetails(state, action) {
      
      state.user = action.payload;
    },

    validate(state, action) {
      
      state.validation = action.payload;
    },
    validateuserdata(state, action) {
     
      if(action.payload===1)
      state.user.user.emailVerified = true
      if(action.payload===2)
      state.user.user.phoneVerified = true
    },
    revalidatevalidateuserdata(state, action) {
     
      if(action.payload===1)
      state.user.user.emailVerified = false
      if(action.payload===2)
      state.user.user.phoneVerified = false
      if(action.payload===3){
        state.user.user.phoneVerified = false
        state.user.user.emailVerified = false
      }
    },

    nulluser(state, action) {
      state.user = null
    },

    fcmtokenupdate(state, action) {
      state.fcmtoken = action.payload
    },
 
    settingtokens(state,action){
      state.user.tokens=action.payload
    },
    closesnackbar(state,action){
      state.snackbar=null
    },
    opensnackbar(state,action){
      state.snackbar=action.payload
    }
   
  },
});

// Reducer
export default slice.reducer;


export const login=(un,pass)=>{
return async (dispatch)=>{
  message.getToken({vapidKey:'BOIjFPKNQYl0YHeWETsCqh0Fh9UbTG4V9EalDPldQ9IBCdZyShSi8WG0dipZX4mvC7Zc0GzPK9QsVCxivhDdelk'})
  .then(async(currentoken)=>{
  
    console.log(currentoken);
    debugger
    dispatch(slice.actions.fcmtokenupdate(currentoken))
    debugger
   await axios({
  method: 'post',
  url: '/api/v1/auth/login',
  data:{
    "userName": un,
    "password": pass,
    "fcmToken": currentoken
  }
}).then(async (res)=>{
  console.log(res)
dispatch(slice.actions.userdetails(res.data.data))
dispatch(slice.actions.opensnackbar({type:"success",message:"Login successful"})) 

})


      }).catch((err)=>{
  console.error(err.message)
  dispatch(slice.actions.opensnackbar({type:"error",message:err?.response?.data?.message}))
      })
}
}


export const logout=()=>{

  return async (dispatch)=>{
    return await axios({
    method: 'post',
    url: '/api/v1/auth/logout',
   
  }).then((res)=>{
    console.log(res)
  dispatch(slice.actions.userdetails(null))
  dispatch(slice.actions.opensnackbar({type:"success",message:"Logout successful"})) 
        }).catch((err)=>{
          dispatch(slice.actions.opensnackbar({type:"error",message:err?.response?.data?.message}))
        })
  }
  }

  export const phoneandemailv=(type,uuid)=>{
   
    return async (dispatch)=>{
      return await axios({
      method: 'post',
      url: '/api/v1/user/verification/token/request',
    data:{ userName:uuid,type:type }
    }).then((res)=>{
      dispatch(slice.actions.opensnackbar({type:"success",message:"Otp Send"})) 
      console.log(res.data.data)
    dispatch(slice.actions.validate(res.data.data))
    
          }).catch((err)=>{
            dispatch(slice.actions.opensnackbar({type:"error",message:err?.response?.data?.message}))
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
      dispatch(slice.actions.opensnackbar({type:"success",message:"verification successful"})) 
      dispatch(slice.actions.validateuserdata(type))
      
            }).catch((err)=>{
              dispatch(slice.actions.opensnackbar({type:"error",message:err?.response?.data?.message}))
            })
      }
      }
  
      export const nulluser=()=>{
        return async (dispatch)=>{
         console.log("wowo")
        dispatch(slice.actions.nulluser(null))
        dispatch(slice.actions.opensnackbar({type:"error",message:"your session has been expired"})) 
       
        }
        }

        export const renewtoken=(token)=>{
          return async (dispatch)=>{
          
            
          dispatch(slice.actions.settingtokens(token.tokens))
          }
        }

          export const closesnackbar=()=>{
            return (dispatch)=>{
            dispatch(slice.actions.closesnackbar())
            }
          }

          export const opensnackbar=(type,message)=>{
            return (dispatch)=>{
            dispatch(slice.actions.opensnackbar({type,message}))
            }
          }

          export const loading=(type)=>{
            
            return (dispatch)=>{
              if(type) dispatch(slice.actions.startLoading()) 
              else dispatch(slice.actions.stopLoading())
            }
          }

          export const signup=(formdata)=>{
            return async (dispatch)=>{
              return await axios({
              method: 'post',
              url: '/api/v1/customer/register/public',
            data:formdata
            }).then((res)=>{
              dispatch(slice.actions.opensnackbar({type:"success",message:"User Created Successfully"})) 
               }).catch((err)=>{
                    dispatch(slice.actions.opensnackbar({type:"error",message:err?.response?.data?.message}))
                  })
            }
            }

        export const  fcmupdate=()=>{
          return (dispatch)=>{
            message.getToken({vapidKey:'BOIjFPKNQYl0YHeWETsCqh0Fh9UbTG4V9EalDPldQ9IBCdZyShSi8WG0dipZX4mvC7Zc0GzPK9QsVCxivhDdelk'})
            .then(async(currentoken)=>{
              await axios({
                method: 'put',
                url: '/api/v1/auth/token/fcm/update',
               data:{fcmToken:currentoken}
              }).then((res)=>{
                console.log(res)
                dispatch(slice.actions.fcmtokenupdate(currentoken))
                
              }).catch((err)=>{
                throw(err)
              })

            }).catch((err)=>{
              dispatch(slice.actions.opensnackbar({type:"error",message:err?.message}))
            })
         
          }
        }  
        
        
  export  const updateverificationsettings=(type)=>{
  return (dispatch)=>{
    dispatch(slice.actions.revalidatevalidateuserdata(type))
  }
     
    }