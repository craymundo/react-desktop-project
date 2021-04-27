import { getOneTextFromArrayMessages } from "../functions/format-request-messages";
import { ResponseObject } from "../models/response-object";

import { empty, merge, of } from "rxjs";
import { AjaxResponse } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

export function actionPipeGeneric<T = any>({apiRequest, actionDone}: { apiRequest: any, actionDone: any }) {

    return ({ payload }: { payload: T }) =>
        {
            return apiRequest(payload).pipe(
                map((result: AjaxResponse) => (result.response)),
                map(actionDone),
                catchError(error =>
                   // console.log(error);
                    merge(
                        of(actionDone(error))
                    )
                )
            )
        }
}

export function actionPipeGenericDone<T = any>() {

    return ({ error, payload }: { error: any, payload: ResponseObject<T> }) => {
        if (!error) {
            if (payload.success) {
                return of(
                    (getOneTextFromArrayMessages(payload.messages))
                );
            } else {
                return of(
                    (getOneTextFromArrayMessages(payload.messages))
                );
            }
        }
        return empty();
    }
}
