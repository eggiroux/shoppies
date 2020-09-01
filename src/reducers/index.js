import { combineReducers } from "redux";

import list from "./list-reducer";
import search from "./search-reducer";

export default combineReducers({ list, search });

export const getNominationsArray = (state) => {
  return Object.values(state.list.nominations);
};
