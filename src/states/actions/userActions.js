import axios from "axios"
import { USER_CREATE_FAILED, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_DELETE_FAILED, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_GET_FAILED, USER_GET_REQUEST, USER_GET_SUCCESS, USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants"

export const listUsers = () => async (dispatch) => {
    dispatch({ type: USER_LIST_REQUEST })
    try {
        const { data } = await axios.get(`https://gorest.co.in/public/v2/users?access-token=3b6d7def95e21829bd48ef8bb71b8dae521d802229e23b807c751813a77bcc02`)
        dispatch({ type: USER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_LIST_FAILED, payload: error })
    }
}
export const registerUser = (data) => async (dispatch) => {
    dispatch({ type: USER_CREATE_REQUEST })
    try {
        const response = await axios.post(`https://gorest.co.in/public/v2/users?access-token=${process.env.REACT_APP_API_TOKEN}`, data)
        dispatch({ type: USER_CREATE_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: USER_CREATE_FAILED, payload: error })
    }
}
export const userDelete = (id) => async (dispatch) => {
    dispatch({ type: USER_DELETE_REQUEST })
    try {
        const response = await axios.delete(`https://gorest.co.in/public/v2/users/${id}?access-token=${process.env.REACT_APP_API_TOKEN}`)
        console.log(response)
        dispatch({ type: USER_DELETE_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: USER_DELETE_FAILED, payload: error })
    }
}
export const userGet = (id) => async (dispatch) => {
    dispatch({ type: USER_GET_REQUEST })
    try {
        const { data } = await axios.get(`https://gorest.co.in/public/v2/users/${id}?access-token=${process.env.REACT_APP_API_TOKEN}`)
        dispatch({ type: USER_GET_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_GET_FAILED, payload: error })
    }
}
export const userEdit = (id, userData) => async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST })
    try {
        const { data } = await axios.put(`https://gorest.co.in/public/v2/users/${id}?access-token=${process.env.REACT_APP_API_TOKEN}`, userData)
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_UPDATE_FAILED, payload: error })
    }
}
