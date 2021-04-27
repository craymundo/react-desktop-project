import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { LoadingComponent } from "../../components/loading";


const Login = lazy(() => import("../login/login"));
const Home = lazy(() => import("../home/home"));
const Operation = lazy(() => import("../operation/operation"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <Switch>
                 <Route exact path="/login" component={Login} />
                 <PrivateRoute exact path="/" component={Home} />
                 <PrivateRoute exact path="/operations" component={Operation} />
                 <PrivateRoute exact path="/home" component={Home} />
            </Switch>
        </Suspense>

    );
}
