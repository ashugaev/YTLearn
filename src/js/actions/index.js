export const selectVideo = video => {
  console.log("Выбрали", video.name);
  return {
    type: "VIDEO_SELECTED",
    payLoad: video
  };
};

export const toggleMenu = state => {
  return {
    type: "TOGGLE_MENU",
    menuActive: !state.menuActive
  };
};
