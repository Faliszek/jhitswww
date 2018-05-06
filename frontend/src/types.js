//@flow

import type { Reducers } from "./reducers";
import type { Action as ActionT } from "./actionType";

/**
 * REDUX
 */
export type Action = ActionT;
type PromiseAction = Promise<Action>;

export type Dispatch = (action: Action | PromiseAction) => any;
export type ReduxStore = Reducers;
export type GetState = () => ReduxStore;
