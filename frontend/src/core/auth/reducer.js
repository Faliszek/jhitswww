// @flow

import type { Action } from "../../types";

export type State =
  | {}
  | {
      accessToken: string,
      exp: number,
      email: string
    };

export const INITIAL_STATE: State = {};

function auth(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case "SIGN_OUT":
      return INITIAL_STATE;
    case "SIGN_IN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}

export default auth;
