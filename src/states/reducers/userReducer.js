import { USER_GET_FAILED, USER_GET_REQUEST, USER_GET_SUCCESS, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/userConstants"

const userReducer = (state = "", action) => {
    return state
}
const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST: return { loading: true };
        case USER_LIST_SUCCESS: return { loading: false, users: action.payload };
        case USER_LIST_FAILED: return { loading: false, error: action.payload };
        default: return state;
    }
}
const userGetReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case USER_GET_REQUEST: return { loading: true };
        case USER_GET_SUCCESS: return { loading: false, user: action.payload };
        case USER_GET_FAILED: return { loading: false, error: action.payload };
        default: return state;
    }
}
export { userReducer, userListReducer, userGetReducer }