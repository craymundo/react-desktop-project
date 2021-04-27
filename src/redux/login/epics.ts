import AuthApi from "../../api/auth.api";
import AuthStorage from "../../libs/auth-storage";

import history from "../../libs/history";
import { ILoginResponse,  DataUser } from "../../models";

import { ofType } from "redux-observable";
import { empty, merge, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { loginActionDone } from "./actions";
import { LOGIN_ACTION, LOGIN_ACTION_DONE } from "./constants";

export const loginEpic = (action$: any) =>
    action$.pipe(
        ofType(LOGIN_ACTION),
        switchMap(({ payload }) =>
            AuthApi.login(payload).pipe(
                map(result => (result.response)),
                map(loginActionDone),
                catchError(error => {
               //     console.log(error);
                    return merge(
                        of(loginActionDone(error))
                    )
                }
                )
            )
        )
    );

export const loginEpicDone = (action$: any) =>
    action$.pipe(
        ofType(LOGIN_ACTION_DONE),
        switchMap(({ error, payload }: { error: any, payload: ILoginResponse }) => {
            if (!error) {
               // console.log(payload);
                const user: DataUser = {
                    id: payload.id,
                    name: payload.name,
                    documentNumber: payload.documentNumber,
                    lastName: payload.last_name,
               }
                AuthStorage.setUser(user);
                history.replace({ pathname: "/" });
            }
            return empty();
        })
    );

export default function LoginEpics(action$: any) {
    return merge(loginEpic(action$), loginEpicDone(action$));
}
