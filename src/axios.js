import axios from 'axios';
import {nulluser,renewtoken} from './redux/slices/user'
import moment from 'moment';
import {baseurl} from './config'
// ----------------------------------------------------------------------


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
  
if(state.user!==null){
   if(moment(state.user?.tokens?.refresh?.expiresAt).diff(moment(),'seconds')>10){

    if(moment(state.user?.tokens?.access?.expiresAt).diff(moment(),'seconds')<10)
    {
      config.headers.authorization = `Bearer ${state.user.tokens.refresh.value}`
      store.dispatch(renewtoken(state.fcmtoken));
    }
   else{ 
    
     config.headers.authorization = `Bearer ${state.user.tokens.access.value}`
    
  }
   } else store.dispatch(nulluser())
  }
  return config
})

export default axiosInstance;
