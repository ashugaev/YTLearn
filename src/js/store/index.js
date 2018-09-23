import { combineReducers } from "redux";

import redusers, { popUpAddSkill } from "../reducers/states";
import skills from "../reducers/skills";

//Собирает в группу разные reduders
const reducers = combineReducers({
  menuState: redusers,
  skills,
  popUpAddSkill
});

export default reducers;
