//@flow
import { createHashHistory } from "history";

export const history = createHashHistory({
  hashType: "slash"
});
