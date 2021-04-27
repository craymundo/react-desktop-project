import { ILoginResponse } from "../../models";
import { handleActions } from "redux-actions";
import {
  LOGIN_ACTION,
  LOGIN_ACTION_DONE,
  LOGIN_RESET_CONFIG_ACTION,
} from "./constants";
import { LoginReducerType } from "./login.redurcer.types";
import initialState from "./state";

const LoginReducer = handleActions<any>(
  {
    [LOGIN_ACTION]: (
      state: LoginReducerType,
      action: any
    ): LoginReducerType => ({
      ...state,
      loading: true,
      user: null,
      codigoError: 0,
    }),
    [LOGIN_ACTION_DONE]: {
      next: (
        state: LoginReducerType,
        { payload }: { payload?: ILoginResponse }
      ): LoginReducerType => {
        return {
          ...state,
          loading: false,
          user: payload || null,
          codigoError: 0,
        };
      },
      throw: (
        state: LoginReducerType,
        { payload }: { payload?: any }
      ): LoginReducerType => {
        console.log("ENTRO AL ERROR", payload);
        return {
          ...state,
          loading: false,
          user: null,
          codigoError: payload.status,
        };
      },
    },
    [LOGIN_RESET_CONFIG_ACTION]: (
      state: LoginReducerType
    ): LoginReducerType => {
      return {
        ...state,
        loading: false,
        user: null,
        codigoError: 0,
      };
    },
  },
  initialState
);

export default LoginReducer;
