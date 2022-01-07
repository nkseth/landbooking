import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  mybooking: null,
};

const slice = createSlice({
  name: "mybookingd",
  initialState,
  reducers: {
    // GET PRODUCTS
    allbookings(state, action) {
      state.mybooking = action.payload;
    },
    verificationstate(state, action) {
      state.verificationstate = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const getbookings = (data) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: "api/v1/reservation/viewall",
    })
      .then(async (res) => {
        dispatch(slice.actions.allbookings(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.details));
      });
  };
};
