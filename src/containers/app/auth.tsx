import AuthStorage from "../../libs/auth-storage";
import { loginResetConfigAction } from "../../redux/login/actions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


export const AuthContext = React.createContext({
    isAuth: true,
    login: () => {/**/},
    logout: () => {/**/},
});

const AuthProvider = ({children}: any) => {
    const user = AuthStorage.getUser();
    const [state, setState] = useState({isAuth: !(user === null)});
  
    const dispatch = useDispatch();
    const login = () => {
        setState({ isAuth: true });
    };

    const logout = () => {
        const user = {
            id: '',
            documentNumber: '',
            name: '',
            lastName: '',
        }
        AuthStorage.setUser(user);
        dispatch(loginResetConfigAction());

        setState({ isAuth: false });
    };

    return (
        <AuthContext.Provider
            value={{
                isAuth: state.isAuth,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };

