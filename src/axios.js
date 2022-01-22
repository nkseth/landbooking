import axios from "axios";
import {
  nulluser,
  renewtoken,
  loading,
  logout,
  opensnackbar,
} from "./redux/slices/user";
import moment from "moment";
import { baseurl } from "./config";
import { authmodalopen } from "./redux/slices/profile";
// ----------------------------------------------------------------------

// const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );

const axiosInstance = axios.create({
  baseURL: baseurl,
});

let store;
export const injectStore = (_store) => {
  store = _store;
};

const renewtokencall = async (token, refresh) => {
  return await axios({
    method: "put",
    url: `${baseurl}api/v1/auth/token/access/renew`,
    headers: { Authorization: `Bearer ${refresh}` },
   
  });
};

axiosInstance.interceptors.request.use(async (config) => {
  store.dispatch(loading(true));

  const state = store.getState().user;
 

  if (state.user !== null) {
    if (
      moment(state.user?.tokens?.refresh?.expiresAt).diff(moment(), "seconds") >
      0
    ) {
      if (
        moment(state.user?.tokens?.access?.expiresAt).diff(
          moment(),
          "seconds"
        ) < 0
      ) {
        

        await renewtokencall(
          state.fcmtoken,
          state.user.tokens.refresh.value
        ).then((res) => {
            store.dispatch(renewtoken(res.data.data));
          config.headers.authorization = `Bearer ${res.data.data.tokens.access.value}`;
          return config;
        }).catch((err) => {
          //localStorage.removeItem("redux-root");
        });
      } else {
        config.headers.authorization = `Bearer ${state.user.tokens.access.value}`;
        return config;
      }
    } else {
      store.dispatch(opensnackbar("error", "Session Expired Please ReLogin"));
      store.dispatch(nulluser());
    }
  } else {
    return config;
  }
});

axiosInstance.interceptors.response.use(
  (config) => {
    store.dispatch(loading(false));
    return config;
  },
  (error) => {
    store.dispatch(loading(false));

  
    if (error.response?.data?.details && typeof error.response?.data?.details === "string" ) {
      store.dispatch(opensnackbar("error", error.response?.data?.details));
    } else store.dispatch(opensnackbar("error", error.response?.data?.message));

    if (error.response?.status === 403) {
      if (error.response?.data?.data?.status !== 1) {
        store.dispatch(logout());
        store.dispatch(
          opensnackbar(
            "error",
            "Your account has been blocked please contact admin"
          )
        );
      }
      if (
        !error.response?.data?.data?.emailVerified ||
        !error.response?.data?.data?.phoneVerified
      ) {
        store.dispatch(
          opensnackbar(
            "error",
            "Please verify your Phone No & email to continue using the Application"
          )
        );
      }
     
    }
    if (error.response?.status === 401) {
      store.dispatch(authmodalopen(true));
      
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
