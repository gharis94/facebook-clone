import {SET_FRIEND} from './friendsType' 

const INITIAL_STATE={
    isHide:false,
    friendList:[],
    group:[]
}

export const friendsReducer =(state=INITIAL_STATE,action={})=>{
    const{type,payload} = action;
    console.log(payload)
    switch(type){
        case SET_FRIEND.IS_CHAT_OPEN:
            return{
                ...state,
                isHide:payload
            }
        case SET_FRIEND.FRIEND_LIST:
            return{
                ...state,
                friendList:payload
            }
        case SET_FRIEND.GROUP_LIST:
            return{
                ...state,
                group:payload
            }
        default:
            return state
    }
}