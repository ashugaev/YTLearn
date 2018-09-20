import { createStore, combineReducers } from "redux";

import redusers from "../reducers/states";
import skills from "../reducers/skills";

//Собирает в группу разные reduders
export default () => {
  const store = createStore(
    combineReducers({
      menuState: redusers,
      skills
    })
  );

  return store;
};
