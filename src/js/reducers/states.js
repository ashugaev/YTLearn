export default function(state = myState, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        menuActive: !state.menuActive
      };
    default:
      return state;
  }
}

const myState = {
  menuActive: false
};
