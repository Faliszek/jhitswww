//@flow

import { push } from "react-router-redux";

import type { Dispatch } from "../../types";
import type { SignInPayload } from "../../actionType";

export function signIn(payload: SignInPayload) {
  return (dispatch: Dispatch) => {
    dispatch({ type: "SIGN_IN", payload });
    dispatch(push("/"));
  };
}

export function signOut(path?: string) {
  return (dispatch: Dispatch) => {
    dispatch({ type: "SIGN_OUT" });
    dispatch(push(path || "/login"));
  };
}
