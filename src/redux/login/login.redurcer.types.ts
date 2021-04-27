import { ILoginResponse } from "../../models";

export type LoginReducerType = {
    loading: boolean;
    user: ILoginResponse | null;
    codigoError: number;
}