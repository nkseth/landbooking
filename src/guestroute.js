import React from 'react';
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom';
const PrivateRoute=({children})=>{
   const user= useSelector((state)=>state.user)
   console.log(user)
    return(
        <>
            {
            user.user?
            user.user.user.emailVerified && user.user.user.phoneVerified?children
            :<Redirect to="/editprofile"/>
            :children
        }
        </>
    )
}
export default PrivateRoute