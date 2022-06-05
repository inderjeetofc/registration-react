import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { userGetReducer, userListReducer } from "./reducers/userReducer";
import { studentReducer } from "./reducers/studentReducer";
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    userList: userListReducer,
    userInfo: userGetReducer,
    student: studentReducer
})
// const defaultState = {
//     user: {
//         items: [{
//             id: 1, first_name: "inderjeet", last_name: "khokhar", email: "idk1@yopmail.com", phone: "1452369852"
//         },
//         {
//             id: 2, first_name: "rajbir", last_name: "khokhar", email: "rbk1@yopmail.com", phone: "6325874123",
//         }]
//     },
//     student: {
//         id: 8, marks: 90
//     }
// }
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;