//@flow

import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import auth from "./core/auth/reducer";

const reducers = combineReducers({
  auth,
  router: routerReducer
});

export default reducers;
