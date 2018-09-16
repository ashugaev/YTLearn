import { combineReducers } from "redux";

import videosReducers from "./videos";
import usersReducers from "./users";
import videoActive from "./videoActive";
import skills from "./skills";
import states from "./states";

const allReducers = combineReducers({
  videos: videosReducers,
  users: usersReducers,
  active: videoActive,
  skills,
  states
});

export default allReducers;
