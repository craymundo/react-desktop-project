
import LoginReducer from "./login/reducer";
import {combineReducers} from "redux";
import ReportReducer from './report/reducer';

export default combineReducers({
    LoginReducer,
    ReportReducer,
});
