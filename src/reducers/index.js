import { combineReducers } from 'redux';
import { appReducer } from './app';
import { userReducer } from './user';

export const Reducers = combineReducers({
    app: appReducer,
    user: userReducer
})