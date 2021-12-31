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








export const updatecurrentslotdetials=(rid,data,sch,slot,alter)=>{
      const finaldata= data.map((item)=>{
            if( typeof item.date==="string"){
                const newitem={...item}
                newitem.date= JSON.stringify(item.date)
                return newitem 
            }
            else return item
        })

    const newdata={"schedules":finaldata,"schedulingPeriod":sch,"alterReservations": alter}
    if(slot){
        newdata["slots"]=slot
    }
  return async (dispatch)=>{
    return await axios({
    method: 'put',
    url: `api/v1/venue/${rid}/schedule/raw/update`,
    headers: {'Content-Type': 'application/json'},
    data:newdata
  }).then(async (res)=>{
   console.log("dasdasdasd",res)
   
   dispatch(opensnackbar("success","Updated succesfully")) 
        }).catch((err)=>{
        
         dispatch(opensnackbar("error",err?.response?.data?.message)) 
        })
  }
}


export const getcurrentslotdetials=(rid,data)=>{

return async (dispatch)=>{
    return await axios({
    method: 'GET',
    url: `api/v1/venue/${rid}/schedule/raw/view`,
    
  }).then(async (res)=>{
   console.log("dasdasdasd",res)
   
   dispatch(slice.actions.setslots(res.data.data))
 
        }).catch((err)=>{
        
         dispatch(opensnackbar("error",err?.response?.data?.message)) 
        })
  }
}

