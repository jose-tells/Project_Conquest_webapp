const reducer = (state, action) => {
  switch (action.type) {
    case "FIND_PHOTO":
      return {
        ...state,
        carousel:
          state.photos.find((items) => items.id === Number(action.payload)) ||
          state.ilustrations.find(
            (items) => items.id === Number(action.payload)
          ) ||
          [],
      };
    case "FIND_VIDEO":
      return {
        ...state,
        player:
          state.videos.find((items) => items.id === Number(action.payload)) ||
          [],
      };
    case "GET_PHOTOS":
      const photos =
        action.payload.map((item) => {
          return {
            id: item.id,
            media: item.urls["regular"],
          };
        }) || [];
      return {
        ...state,
        photos,
      };
    case "GET_VIDEO":
      return {
        ...state,
        player: action.payload.find((video) => video.width === 1920),
      };
    case "GET_VIDEOS":
      const videos =
        action.payload.media.map((item) => {
          return {
            id: item.id,
            media:
              item.video_files.find((video) => {
                return video.width === 1920 || 960;
              }) || [],
          };
        }) || [];
      return {
        ...state,
        videos,
      };
    default:
      return state;
  }
};

export default reducer;
