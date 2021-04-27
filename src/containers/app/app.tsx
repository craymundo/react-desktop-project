import "./styles/app.scss";

import LayoutHome from "../shared/layout-home/layout-home";

import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "../../redux/store";
import AppRoutes from "./app.routes";
import { AuthProvider } from "./auth";

import { createStore, StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";

createStore({});
function App() {
  return (
    <Provider store={store}>
      <Router>
        <StateMachineProvider>
          {process.env.NODE_ENV !== "production" && <DevTool />}
          <AuthProvider>
            <LayoutHome>
              <AppRoutes />
            </LayoutHome>
          </AuthProvider>
        </StateMachineProvider>
      </Router>
    </Provider>
  );
}

export default App;
