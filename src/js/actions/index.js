// Вызывает reducer меняющий стейт меню
export const toggleMenu = () => ({
  type: "TOGGLE_MENU"
});

export const skillAdd = newSkill => ({
  type: "SKILL_ADD",
  newSkill
});
