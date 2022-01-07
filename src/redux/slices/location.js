import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
  locationstring: null,
  longitude: null,
  latitude: null,
  timezone: null,
  zipcode: null,
};

const slice = createSlice({
  name: "location",
  initialState,
  reducers: {
    locationnulllltz(state, action) {
      state.latitude = action.payload;
      state.longitude = action.payload;
      state.zipcode = action.payload;
      state.timezone = action.payload;
    },
    locationstring(state, action) {
      state.locationstring = action.payload;
      if (action.payload === null) {
        state.latitude = action.payload;
        state.longitude = action.payload;
        state.zipcode = action.payload;
        state.timezone = action.payload;
      }
    },
    locationll(state, action) {
      state.latitude = action.payload[0].coordinates.latitude;
      state.longitude = action.payload[0].coordinates.longitude;
      state.zipcode = action.payload[0].zipcode;
    },

    timezone(state, action) {
      state.timezone = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const locationfind = (search = "") => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/location/find/places/${search}`,
    }).then(async (res) => {
      dispatch(slice.actions.locationstring(res.data));
    });
  };
};

export const locationnull = () => {
  return async (dispatch) => {
    dispatch(slice.actions.locationstring(null));
  };
};

export const locationfindll = (search) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/location/get/address/${search}`,
    }).then(async (res) => {
 
      dispatch(slice.actions.locationll(res.data));

      await axios({
        method: "get",
        url: `/api/v1/location/get/timezone/${res.data[0].coordinates.latitude}/${res.data[0].coordinates.longitude}`,
      }).then((res) => {
        dispatch(slice.actions.timezone(res.data.timezone));
      
      });
    });
  };
};

export const locationlltz = () => {
  return async (dispatch) => {
    dispatch(slice.actions.locationnulllltz(null));
  };
};
