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
  name: "popularlisting",
  initialState,
  reducers: {
  

    // GET PRODUCTS
   listing(state, action) {
      state.isLoading = false;
      state.listing = action.payload;
    },
    listingdetails(state, action) {
      state.isLoading = false;
      state.listingdetails = action.payload;
    },
    hostedlisting(state, action) {
     
      state.hostedlisting = action.payload;
    },
    reviews(state, action) {
     
      state.reviews = action.payload;
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

      }).catch((err)=>{
      dispatch(opensnackbar("error",err?.response?.data?.message)) 
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
  
        }).catch((err)=>{
          dispatch(opensnackbar("error",err?.response?.data?.message))
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
    
          }).catch((err)=>{
            dispatch(opensnackbar("error",err?.response?.data?.message)) 
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
      
            }).catch((err)=>{
             dispatch(opensnackbar("error",err?.response?.data?.message)) 
            })
      }
      } 
  

      export const viewhostedlisting=()=>{
        return async (dispatch)=>{
          return await axios({
          method: 'get',
          url: '/api/v1/venue/viewall/hosted',
         
          
        }).then(async (res)=>{
       

        dispatch(slice.actions.hostedlisting(res.data.data))
        
              }).catch((err)=>{
                dispatch(opensnackbar("error",err?.response?.data.message))
              })
        }
        }

        export const reviews=(id)=>{
          return async (dispatch)=>{
            return await axios({
            method: 'get',
            url: `/api/v1/review/${id}/viewall`,
           
            
          }).then(async (res)=>{
         
  
          dispatch(slice.actions.reviews(res.data.data))
          
                }).catch((err)=>{
                  dispatch(opensnackbar("error",err?.response?.data.message))
                })
          }
          }
    

