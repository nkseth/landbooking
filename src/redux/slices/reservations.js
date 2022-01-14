import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  notification: null,
  reservationdetails: null,
  booked: null,
  transaction: null,
  reshuduleslisting:null
};

const slice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // GET PRODUCTS
    reservations(state, action) {
      state.reservationdetails = action.payload;
    },
    notification(state, action) {
      state.notification = action.payload;
    },
    booking(state, action) {
      state.booked = action.payload;
    },
    transaction(state, action) {
      state.transaction = action.payload;
    },
    reshuduleslisting(state, action) {
      state.reshuduleslisting = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const requestreservation = (data) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/reservation/request",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(data),
    })
      .then(async (res) => {
      
        dispatch(slice.actions.reservations(data));
        dispatch(
          opensnackbar("success", "Booking request submitted successfully")
        );
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const notification = (data) => {
  return (dispatch) => {
    dispatch(slice.actions.notification(data));
  };
};

export const EmptyNotification = () => {
  return (dispatch) => {
    dispatch(slice.actions.notification(null));
  };
};

export const EmptyReservation = () => {
  return (dispatch) => {
    dispatch(slice.actions.reservations(null));
  };
};

export const confirmreservation = (token, rid, vid) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: `api/v1/reservation/confirm/${rid}`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({ venueId: vid, stripetoken: token.id }),
    })
      .then(async (res) => {
       
        dispatch(slice.actions.booking("done"));
        dispatch(opensnackbar("success", "Booking Confirmed"));
      })
      .catch((err) => {
        dispatch(slice.actions.booking("goterror"));
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const booking = (data) => {
  return (dispatch) => {
    dispatch(slice.actions.booking(data));
  };
};

export const reschedulereservation = (data, reservationid) => {
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `api/v1/reservation/reschedule/${reservationid}`,
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(data),
    })
      .then(async (res) => {
  
        dispatch(slice.actions.reservations(data));
        dispatch(
          opensnackbar("success", "Reschedule request submitted successfully")
        );
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const gettransaction = (data) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/payment/transaction/viewall`,
    })
      .then(async (res) => {
     
        dispatch(slice.actions.transaction(res.data.data));
      })
      .catch((err) => {});
  };
};



export const cancelReservation = (reservationid) => {
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `/api/v1/reservation/cancell/${reservationid}`,
      headers: { "Content-Type": "application/json" },
     
    })
      .then(async (res) => {
  
       
        dispatch(
          opensnackbar("success", "Cancellation request submitted successfully")
        );
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const getreservatio = (id) => {
  
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `api/v1/reservation/view/${id}`,
    })
      .then(async (res) => {
        debugger
        dispatch(slice.actions.reshuduleslisting(res.data.data));
       
      })
      .catch((err) => {});
  };
};