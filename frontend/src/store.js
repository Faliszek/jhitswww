//@flow
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import reducers from "./reducers"; // Or wherever you keep your reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);
