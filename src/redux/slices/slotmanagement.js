import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  currentdetails: null,
  blocks: null,
};

const slice = createSlice({
  name: "slotmanagement",
  initialState,
  reducers: {
    // GET PRODUCTS
    setslots(state, action) {
      state.currentdetails = action.payload;
    },

    setbolcks(state, action) {
      state.blocks = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const updatecurrentslotdetials = (rid, data, sch, slot, alter) => {
  const finaldata = data.map((item) => {
 
      const newitem = { ...item };
      newitem.date = JSON.stringify(item.date);
      return newitem;
 
  });

  const newdata = {
    schedules: finaldata,
    schedulingPeriod: sch,
    alterReservations: alter,
  };
  if (slot) {
    newdata["slots"] = slot;
  }
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `api/v1/venue/${rid}/schedule/raw/update`,
      headers: { "Content-Type": "application/json" },
      data: newdata,
    })
      .then(async (res) => {
        
        dispatch(opensnackbar("success", "Updated succesfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const getcurrentslotdetials = (rid, data) => {
  return async (dispatch) => {
    return await axios({
      method: "GET",
      url: `api/v1/venue/${rid}/schedule/raw/view`,
    })
      .then(async (res) => {
       

        dispatch(slice.actions.setslots(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const createblock = (id, data) => {
  debugger;
  return async (dispatch) => {
    return await axios({
      method: "POST",
      url: `/api/v1/venue/${id}/calendar/block/create`,
      data: data,
    })
      .then(async (res) => {
       
        dispatch(opensnackbar("success", "Block Created successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const viewblock = (id, to, from) => {
  const url = `/api/v1/venue/${id}/calendar/block/viewall?fromDate=${from}&toDate=${to}`;
  return async (dispatch) => {
    return await axios({
      method: "GET",
      url: to ? url : `/api/v1/venue/${id}/calendar/block/viewall`,
    })
      .then(async (res) => {
      
      
          dispatch(slice.actions.setbolcks(res.data.data));
       
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const Deleteblock = (vid, bid) => {
  return async (dispatch) => {
    return await axios({
      method: "DELETE",
      url: `/api/v1/venue/${vid}/calendar/block/${bid}/delete`,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Deleted Successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const Updateblock = (vid, bid, data) => {
  return async (dispatch) => {
    return await axios({
      method: "PUT",
      url: `/api/v1/venue/${vid}/calendar/block/${bid}/update`,
      data: data,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "updated Successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};
