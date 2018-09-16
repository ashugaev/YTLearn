import { combineReducers } from "redux";

import videosReducers from "./videos";
import usersReducers from "./users";
import videoActive from "./videoActive";
import skills from "./skills";

const allReducers = combineReducers({
  videos: videosReducers,
  users: usersReducers,
  active: videoActive,
  skills
});

export default allReducers;
