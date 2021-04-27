import {createActions} from "redux-actions";
import {LOGIN_ACTION, LOGIN_ACTION_DONE, LOGIN_RESET_CONFIG_ACTION} from "./constants";

const actionsCreator = createActions(
    LOGIN_ACTION,
    LOGIN_ACTION_DONE,
    LOGIN_RESET_CONFIG_ACTION
);

export const {
    loginAction, 
    loginActionDone,
    loginResetConfigAction,
} = actionsCreator;
