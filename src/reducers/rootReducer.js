import { combineReducers } from 'redux'
import {usersReducer} from './usersReducers'
import {postsReducer} from './usersReducers'
import {commentsReducer} from './usersReducers'

export const rootReducer = combineReducers({
    users: usersReducer, 
    posts: postsReducer, 
    comments: commentsReducer
})