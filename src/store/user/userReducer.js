import {SET_USER} from './userType'
const INITIAL_STATE={
    isLogIn:false,
    user:{}
}


export const userReducer =(state=INITIAL_STATE,action={})=>{
    const {type,payload} = action
   
    switch(type){
        case SET_USER.USER_ISLOGIN:
            return{
                ...state,
                isLogIn:true,
                user:payload
            }
        default:
            return state
    }
}