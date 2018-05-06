// @flow

const KEY = "up";

export function loadState() {
  try {
    const state: ?string = localStorage.getItem(KEY);
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
}

export function saveState(state: Object) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(KEY, serialized);
  } catch (e) {
    console.error("Could not save state!", e);
  }
}
