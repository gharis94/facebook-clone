import { createAction } from "../../utils/createAction"
import {SET_USER} from './userType'

export const setCurrentUser=(data)=>(
    createAction(SET_USER.USER_ISLOGIN,data)
)