import { actionType } from "../constants";

export const checkAuth = (user) => {
    return {
        type: actionType.CHECK_AUTH,
        isLogin: user
    }
}

export const userData = (user) => {
    return {
        type: actionType.USER_DATA,
        user: user
    }
}

export const clearUser = () => {
    return {
        type: actionType.CLEAR_USER_DATA,
    }
}