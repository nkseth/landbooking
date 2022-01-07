import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  addedlisting: null,
};

const slice = createSlice({
  name: "popularlisting",
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
    addlisting(state, action) {
      state.isLoading = false;
      state.listing = action.payload;
    },
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
    }).then(async (res) => {
     
    });
  };
};

export const updatelisting = (fromdata, id) => {
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `/api/v1/venue/${id}/update`,
      data: fromdata,
    }).then(async (res) => {
    
      dispatch(opensnackbar("success", "Lisitng Updated successfully"));
    });
  };
};
