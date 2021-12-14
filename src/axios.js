import axios from 'axios';
import {nulluser} from './redux/slices/user'
import moment from 'moment';
// ----------------------------------------------------------------------
const baseurl = 'https://yardcan.riolabz.com/';

// const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );

const axiosInstance=axios.create({
    baseURL:baseurl,

})

let store

export const injectStore = _store => {
  store = _store
}

axiosInstance.interceptors.request.use(config => {
    
    const state=store.getState().user
    console.log(state)
    if(state.user!==null){
     config.headers.authorization = state.user.tokens.access
    }
 
 // store.dispatch(nulluser())
  return config
})

export default axiosInstance;
