import { LoginReducerType } from "./login.redurcer.types";

const loginState: LoginReducerType = {
    loading: false,
    user: null,
    codigoError: 0,
}

export default loginState;
