import LoginEpics from "./login/epics";

import {combineEpics} from "redux-observable";
import ReportEpics from './report/epics';

export default combineEpics(
    LoginEpics,
    ReportEpics,
);
