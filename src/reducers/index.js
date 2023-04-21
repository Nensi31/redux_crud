import { formReducers } from "./formReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ formReducers });
export default rootReducer;
