// Меняет стейт меню
export default (state = { menuActive: false }, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      console.log("menu state", state.menuActive);
      return {
        menuActive: !state.menuActive
      };
    default:
      return state;
  }
};

export const popUpAddSkill = (state = { popUpActive: false }, action) => {
  console.log(state);
  switch (action.type) {
    case "TOGGLE_ADD_SKILL":
      console.log(state);
      return {
        menuActive: !state.menuActive
      };
    default:
      return state;
  }
};
