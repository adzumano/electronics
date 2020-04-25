import { combineReducers, createStore } from "redux";
import accountReducer from "./reducer/accountReducer";
import profileReducer from './reducer/profileReducer';

let reducers = combineReducers({
    accountPage : accountReducer,
    profilePage : profileReducer
});

let store = createStore(reducers);

export default store;