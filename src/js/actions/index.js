export const selectVideo = video => {
  console.log("Выбрали", video.name);
  return {
    type: "VIDEO_SELECTED",
    payLoad: video
  };
};