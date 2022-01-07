import { createSlice } from "@reduxjs/toolkit";
import { message } from "../../fireabse";
import axios from "../../axios";
import { setverificationstate } from "./profile";
const initialState = {
  isLoading: true,
  error: false,
  user: null,
  validation: null,
  fcmtoken: null,
  snackbar: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },

    // HAS ERROR

    // GET PRODUCTS
    userdetails(state, action) {
      state.user = action.payload;
    },

    validate(state, action) {
      state.validation = action.payload;
    },
    validateuserdata(state, action) {
      if (action.payload === 1) state.user.user.emailVerified = true;
      if (action.payload === 2) state.user.user.phoneVerified = true;
    },
    revalidatevalidateuserdata(state, action) {
      state.user.user = { ...state.user.user, ...action.payload };
    },

    nulluser(state, action) {
      state.user = null;
    },

    fcmtokenupdate(state, action) {
      state.fcmtoken = action.payload;
    },

    settingtokens(state, action) {
      state.user.tokens = action.payload;
    },
    closesnackbar(state, action) {
      state.snackbar = null;
    },
    opensnackbar(state, action) {
      state.snackbar = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const login = (un, pass) => {
  return async (dispatch) => {
    message
      .getToken({
        vapidKey:
          "BOIjFPKNQYl0YHeWETsCqh0Fh9UbTG4V9EalDPldQ9IBCdZyShSi8WG0dipZX4mvC7Zc0GzPK9QsVCxivhDdelk",
      })
      .then(async (currentoken) => {
     

        dispatch(slice.actions.fcmtokenupdate(currentoken));

        await axios({
          method: "post",
          url: "/api/v1/auth/login",
          data: {
            userName: un,
            password: pass,
            fcmToken: currentoken,
          },
        })
          .then(async (res) => {
          
            dispatch(slice.actions.userdetails(res.data.data));
            dispatch(
              slice.actions.opensnackbar({
                type: "success",
                message: "Login successful",
              })
            );

            let paper = {};
            if (Object.keys(res.data.data.user.verifications).length > 0) {
              if (
                Object.keys(res.data.data.user.verifications).includes("email")
              )
                paper["emailVerificationId"] =
                  res.data.data.user.verifications.email.uuid;

              if (
                Object.keys(res.data.data.user.verifications).includes("phone")
              )
                paper["phoneVerificationId"] =
                  res.data.data.user.verifications.phone.uuid;
            }

            dispatch(setverificationstate(paper));
          })
          .catch((err) => {
          });
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/auth/logout",
    })
      .then((res) => {
      
        dispatch(slice.actions.userdetails(null));
        dispatch(
          slice.actions.opensnackbar({
            type: "success",
            message: "Logout successful",
          })
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.opensnackbar({
            type: "error",
            message: err?.response?.data?.message,
          })
        );
      });
  };
};

export const phoneandemailv = (type, uuid) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/user/verification/token/request",
      data: { userName: uuid, type: type },
    })
      .then((res) => {
        dispatch(
          slice.actions.opensnackbar({ type: "success", message: "Otp Send" })
        );
      
        dispatch(slice.actions.validate(res.data.data));
      })
      .catch((err) => {
        dispatch(
          slice.actions.opensnackbar({
            type: "error",
            message: err?.response?.data?.message,
          })
        );
      });
  };
};

export const validate = (
  { userId, verificationId },
  token,
  type,
  ifpassword
) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/user/verification/token/validate",
      data: {
        userId,
        verificationId,
        token,
      },
    })
      .then(async (res) => {
      
        dispatch(slice.actions.validate(null));

        dispatch(
          slice.actions.opensnackbar({
            type: "success",
            message: "verification successful",
          })
        );
        dispatch(slice.actions.validateuserdata(type));

        if (ifpassword) {
          await axios({
            method: "put",
            url: `/api/v1/user/${userId}/resetpassword`,
            data: {
              verificationId,
              password: ifpassword,
            },
          })
            .then(() => {
              dispatch(
                slice.actions.opensnackbar({
                  type: "success",
                  message: "Password Updated successfully",
                })
              );
            })
            .catch((error) => {
              throw new Error("Password Reset failed");
            });
        }
      })
      .catch((err) => {
        dispatch(
          slice.actions.opensnackbar({
            type: "error",
            message: err?.response?.data?.message,
          })
        );
      });
  };
};

export const nulluser = () => {
  return async (dispatch) => {
   
    dispatch(slice.actions.nulluser(null));
    dispatch(
      slice.actions.opensnackbar({
        type: "error",
        message: "your session has been expired",
      })
    );
  };
};

export const renewtoken = (token) => {
  return async (dispatch) => {
    dispatch(slice.actions.settingtokens(token.tokens));
  };
};

export const closesnackbar = () => {
  return (dispatch) => {
    dispatch(slice.actions.closesnackbar());
  };
};

export const opensnackbar = (type, message) => {
  return (dispatch) => {
    dispatch(slice.actions.opensnackbar({ type, message }));
  };
};

export const loading = (type) => {
  return (dispatch) => {
    if (type) dispatch(slice.actions.startLoading());
    else dispatch(slice.actions.stopLoading());
  };
};

export const signup = (formdata) => {
  return async (dispatch) => {
    return await axios({
      method: "post",
      url: "/api/v1/customer/register/public",
      data: formdata,
    })
      .then((res) => {
        dispatch(
          slice.actions.opensnackbar({
            type: "success",
            message: "User Created Successfully",
          })
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.opensnackbar({
            type: "error",
            message: err?.response?.data?.message,
          })
        );
      });
  };
};

export const fcmupdate = () => {
  return (dispatch) => {
    message
      .getToken({
        vapidKey:
          "BOIjFPKNQYl0YHeWETsCqh0Fh9UbTG4V9EalDPldQ9IBCdZyShSi8WG0dipZX4mvC7Zc0GzPK9QsVCxivhDdelk",
      })
      .then(async (currentoken) => {
        await axios({
          method: "put",
          url: "/api/v1/auth/token/fcm/update",
          data: { fcmToken: currentoken },
        })
          .then((res) => {
        
            dispatch(slice.actions.fcmtokenupdate(currentoken));
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        dispatch(
          slice.actions.opensnackbar({ type: "error", message: err?.message })
        );
      });
  };
};

export const updateverificationsettings = (data) => {
  return (dispatch) => {
    dispatch(slice.actions.revalidatevalidateuserdata(data));
  };
};
