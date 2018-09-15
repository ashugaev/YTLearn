import { combineReducers } from "redux";

import videosReducers from "./videos";
import usersReducers from "./users";
import videoActive from "./videoActive";

const allReducers = combineReducers({
  videos: videosReducers,
  users: usersReducers,
  active: videoActive
});

export default allReducers;
