import { actionType } from "../constants";

export const checkAuth = (state = false, { type, isLogin }) => {
    switch (type) {
        case actionType.CHECK_AUTH:
            return isLogin;
        default:
            return state;
    }
}

export const userData = (state = {}, { type, user }) => {
    switch (type) {
        case actionType.USER_DATA:
            return { ...state, ...user };
        case actionType.CLEAR_USER_DATA:
            return {};
        default:
            return state
    }
}
