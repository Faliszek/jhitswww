//@flow
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import throttle from "lodash/throttle";
import { saveState, loadState } from "./localStorage";
import reducers from "./reducers"; // Or wherever you keep your reducers
import { history } from "./history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
// Build the middleware for intercepting and dispatching navigation actions

export const store = createStore(
  reducers,
  loadState(),
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);

store.subscribe(
  throttle(() => {
    const { auth } = store.getState();
    saveState({ auth });
  }),
  200
);
