import { login } from "../constants/api.routes";
import Api from "./api";

export default class AuthApi {
    static login(payload: any) {
        const user = {
            documentNumber: payload,
        }
        return Api.post(login, { data: user });
    }
}