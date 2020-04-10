import { combineReducers, createStore } from "redux";
import accountReducer from "./reducer/accountReducer";

let reducers = combineReducers({
    accountPage : accountReducer,
});

let store = createStore(reducers);

export default store;