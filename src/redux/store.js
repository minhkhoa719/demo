import { createStore, combineReducers } from "redux";
import reducer from "./reudcer/reducer";

const store = createStore(reducer);

export default store;
