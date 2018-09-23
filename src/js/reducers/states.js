// Меняет стейт меню
export default (state = { menuActive: true }, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
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
