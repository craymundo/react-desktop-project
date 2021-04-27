import {handleActions} from "redux-actions";
import {
    GET_REPORT_ACTION,
    GET_REPORT_ACTION_DONE,
    ADD_OPERATION_ACTION,
    ADD_OPERATION_ACTION_DONE,
} from "./constants";
import initialState from "./state";

const ReportReducer = handleActions<any>(
    {
        [GET_REPORT_ACTION]: (state, action) => ({...state, loading: true}),
        [GET_REPORT_ACTION_DONE]: {
            next: (state, action) => ({
                ...state,
                loading: false,
                response: action.payload,
              
            }),
            throw: (state, {payload}) => ({
                ...state,
                loading: false,
                response: [],
              
            }),
        },

        [ADD_OPERATION_ACTION]: (state, action) => ({...state, loading: true}),
        [ADD_OPERATION_ACTION_DONE]: {
            next: (state, action) => ({
                ...state,
                loading: false,
                response: [],
                operationId: action.payload,
                operationDesc: '',
            }),
            throw: (state, {payload}) => ({
                ...state,
                loading: false,
                response: 0,
                operationId: '',
                operationDesc: '',
            }),
        },

    },
    initialState
);

export default ReportReducer;
