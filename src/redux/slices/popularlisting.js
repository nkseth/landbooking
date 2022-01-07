import { createSlice } from "@reduxjs/toolkit";

import axios from "../../axios";
import { opensnackbar } from "./user";
const initialState = {
  listing: null,
  listingdetails: null,
  hostedlisting: null,
  reviews: null,
  listingcount: null,
  favourite: null,
};

const slice = createSlice({
  name: "popularlisting",
  initialState,
  reducers: {
    // GET PRODUCTS
    listing(state, action) {
      state.listingcount = action.payload.count;
      state.listing = action.payload.data;
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
    favourite(state, action) {
      state.favourite = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const getlistingprivate = ({
  search,
  limit,
  page,
  categoryId,
  coordinateRange,
  zipcode,
  latitude,
  longitude,
  radius,
}) => {
  let restdata = { limit, page };
  if (search !== null) restdata["search"] = search;
  if (categoryId) restdata["categoryId"] = categoryId;
  if (coordinateRange?.latitude)
    restdata["coordinateRange"] = JSON.stringify(coordinateRange);
  if (zipcode) restdata["zipcode"] = zipcode;

  const qs = Object.keys(restdata)
    .map((key) => `${key}=${restdata[key]}`)
    .join("&");
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/venue/viewall?${qs}`,
      data: { limit, page, ...restdata },
    })
      .then(async (res) => {
      
        if (res.data.data.length > 0)
          dispatch(
            slice.actions.listing({
              data: res.data.data,
              count: res.data.count,
            })
          );
        else dispatch(opensnackbar("error", "No result found"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const getlistingpublic = ({
  search,
  limit,
  page,
  categoryId,
  coordinateRange,
  zipcode,
  latitude,
  longitude,
  radius,
}) => {
  let restdata = { limit, page };
  if (search) {
    restdata["search"] = search;
  }
  if (categoryId) restdata["categoryId"] = categoryId;
  if (coordinateRange?.latitude)
    restdata["coordinateRange"] = JSON.stringify(coordinateRange);
  if (zipcode) restdata["zipcode"] = zipcode;

  const qs = Object.keys(restdata)
    .map((key) => `${key}=${restdata[key]}`)
    .join("&");

  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/venue/viewall/public?${qs}`,
    })
      .then(async (res) => {
     
        if (res.data.data.length > 0)
          dispatch(
            slice.actions.listing({
              data: res.data.data,
              count: res.data.count,
            })
          );
        else dispatch(opensnackbar("error", "No result found"));
      })
      .catch((err) => {});
  };
};

export const viewdetailsprivate = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/venue/${id}/view`,
    })
      .then(async (res) => {
       
        dispatch(slice.actions.listingdetails(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const viewdetailspublic = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/venue/${id}/view/public`,
    })
      .then(async (res) => {
      
        dispatch(slice.actions.listingdetails(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data?.message));
      });
  };
};

export const viewhostedlisting = () => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: "/api/v1/venue/viewall/hosted",
    })
      .then(async (res) => {
        dispatch(slice.actions.hostedlisting(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const reviews = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/review/${id}/viewall`,
    })
      .then(async (res) => {
        dispatch(slice.actions.reviews(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const givereviews = (id, data) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: `/api/v1/review/${id}/create`,
      data: data,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Thanks fro your feedback"));
        dispatch(slice.actions.reviews(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const deletereviews = (vid, rid) => {
  return async (dispatch) => {
    return await axios({
      method: "delete",
      url: `api/v1/review/${vid}/delete/${rid}`,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Review Deleted Successfully"));
      })
      .catch((err) => {
        // dispatch(opensnackbar("error",err?.response?.data.message))
      });
  };
};

export const updatereviews = (vid, rid, data) => {
  return async (dispatch) => {
    return await axios({
      method: "put",
      url: `api/v1/review/${vid}/update/${rid}`,
      data: data,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Review Updated Successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const addfavour = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: `/api/v1/venue/favourite/add/${id}`,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Addes ot your Favourites"));
      })
      .catch((err) => {
        // dispatch(opensnackbar("error",err?.response?.data.message))
      });
  };
};

export const viewFavourites = () => {
  return async (dispatch) => {
    return await axios({
      method: "get",
      url: `/api/v1/venue/favourite/viewall`,
    })
      .then(async (res) => {
        dispatch(slice.actions.favourite(res.data.data));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const removeFavourites = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "delete",
      url: `/api/v1/venue/favourite/remove/${id}`,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Deleted Successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};

export const Deletelisting = (id) => {
  return async (dispatch) => {
    return await axios({
      method: "delete",
      url: `/api/v1/venue/${id}/delete  `,
    })
      .then(async (res) => {
        dispatch(opensnackbar("success", "Deleted Successfully"));
      })
      .catch((err) => {
        dispatch(opensnackbar("error", err?.response?.data.message));
      });
  };
};
