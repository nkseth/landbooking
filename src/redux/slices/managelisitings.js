import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  addedlisting: null,
};

const slice = createSlice({
  name: "addlising",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    // GET PRODUCTS
  },
});

// Reducer
export default slice.reducer;

export const addlisting = (fromdata) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/venue/create",
      data: fromdata,
    })
      .then(async (res) => {
      
        dispatch(opensnackbar("success", "new Venue created succesfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const editlisting = (fromdata, id) => {
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `/api/v1/venue/${id}/update`,
      data: fromdata,
    })
      .then(async (res) => {
       
        dispatch(opensnackbar("success", "Venue updated created succesfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};
