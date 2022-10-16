import {SET_USER} from './userType'
const INITIAL_STATE={
    isLogIn:false
}


export const userReducer =(state=INITIAL_STATE,action={})=>{
    const {type,payload} = action

    switch(type){
        case SET_USER.USER_ISLOGIN:
            return{
                ...state
            }
        default:
            return state
    }
}