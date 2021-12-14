import {combineReducer} from 'redux'

import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";






export const rootReducer = combineReducer({
    posts: postsReducer,
    comments: commentsReducer
})