import OperationsApi from "../../api/operations.api";

import { ofType } from "redux-observable";
import { empty, merge, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getReportActionDone, addOperationActionDone } from "./actions";
import {
  GET_REPORT_ACTION,
  GET_REPORT_ACTION_DONE,
  ADD_OPERATION_ACTION,
  ADD_OPERATION_ACTION_DONE,
} from "./constants";

export const getReportEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_REPORT_ACTION),
    switchMap(({ payload }) =>
      OperationsApi.getAllMenu().pipe(
        map((result) => result.response),
        map(getReportActionDone),
        catchError((error) => {
          return merge(of(getReportActionDone(error)));
        })
      )
    )
  );

export const getReportDone = (action$: any) =>
  action$.pipe(
    ofType(GET_REPORT_ACTION_DONE),
    switchMap(({ error, payload }: { error: any; payload: any }) => {
      return empty();
    })
  );

export const addOperationEpic = (action$: any) =>
  action$.pipe(
    ofType(ADD_OPERATION_ACTION),
    switchMap(({ payload }) =>
      OperationsApi.addOperation(payload.menuId, payload.customerId).pipe(
        map((result) => result.response),
        map(addOperationActionDone),
        catchError((error) => {
          return merge(of(addOperationActionDone(error)));
        })
      )
    )
  );

export const addOperationDone = (action$: any) =>
  action$.pipe(
    ofType(ADD_OPERATION_ACTION_DONE),
    switchMap(({ error, payload }: { error: any; payload: any }) => {
      return empty();
    })
  );

export default function ReportEpics(action$: any) {
  return merge(
    getReportEpic(action$),
    getReportDone(action$),
    addOperationEpic(action$),
    addOperationEpic(action$)
  );
}
