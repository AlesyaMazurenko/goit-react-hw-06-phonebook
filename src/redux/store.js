import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import reducer from "./reducer";


// const store = configureStore({
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
    
export default store;

