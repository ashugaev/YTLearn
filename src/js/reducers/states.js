export default function(state = false, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return Object.assign({}, state, {
        menuActive: true
      });
    default:
      return state;
  }
}
