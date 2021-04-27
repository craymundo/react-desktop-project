import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginReducerType } from "app/redux/login/login.redurcer.types";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useSelector((state: { LoginReducer: LoginReducerType }) => state.LoginReducer);
  return <Route {...rest}> {user? <Component /> : <Redirect to="/login" />  }  </Route>;
};

export default PrivateRoute;
