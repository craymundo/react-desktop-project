import {createEpicMiddleware} from "redux-observable";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore, compose} from "redux";
import reducer from "./reducers";
import rootEpic from "./epics";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();
const getMiddleware = () => {
    const middlewares = [epicMiddleware];
    if (process.env.NODE_ENV !== "production") {
        const logger = createLogger()
        middlewares.push(logger as any);
    }
    return applyMiddleware(...middlewares);
};
const store = createStore(reducer, {}, composeEnhancers(getMiddleware()));

epicMiddleware.run((rootEpic as any));
export default store;
