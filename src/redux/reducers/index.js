import { combineReducers } from "redux";

import { checkAuth, userData } from './allReducers';

export const rootReducers = combineReducers({
    isLogin: checkAuth,
    userData: userData
})