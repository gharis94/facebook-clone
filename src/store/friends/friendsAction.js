import { createAction } from "../../utils/createAction"
import {SET_FRIEND} from './friendsType'


export const setIsHide =(data)=>createAction(SET_FRIEND.IS_CHAT_OPEN,data)


export const setFriends = (data)=>createAction(SET_FRIEND.FRIEND_LIST,data)

export const addToGroup =(groupArr,group)=>{
    console.log(groupArr,group)
    let newArr = [...groupArr,group]
    console.log(newArr)
    return createAction(SET_FRIEND.GROUP_LIST,newArr)
}

export const removeFromGroup=(groupArr,group)=>{
    let find = groupArr.indexOf(group)
    let newArr = groupArr.filter((_,idx)=>idx !== find)
    return createAction(SET_FRIEND.GROUP_LIST,newArr)
}