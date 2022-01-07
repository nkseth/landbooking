import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
const initialState = {
  amenity: null,
};

const slice = createSlice({
  name: "amenity",
  initialState,
  reducers: {
    // START LOADING

    // GET PRODUCTS
    amenity(state, action) {
      state.amenity = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const amenity = () => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: "/api/v1/amenity/viewall",
    }).then(async (res) => {
      dispatch(slice.actions.amenity(res.data.data));
    });
  };
};
