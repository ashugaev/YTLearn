// Меняет стейт меню
export default (state = { menuActive: false }, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        menuActive: !state.menuActive
      };
    default:
      return state;
  }
};
