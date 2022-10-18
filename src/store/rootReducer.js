import {combineReducers} from 'redux'
import {userReducer} from './user/userReducer'
import {friendsReducer} from './friends/friendsReducer'

export const rootReducer =combineReducers({
    user:userReducer,
    friend:friendsReducer
})