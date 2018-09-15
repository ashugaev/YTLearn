import { connect } from "net";

export default function(state = null, action) {
  switch (action.type) {
    case "VIDEO_SELECTED":
      return action.payLoad;
    default:
      return state;
  }
}
