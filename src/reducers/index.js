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
    case "GET_PROFILE":
      const profile =
        state.profiles
          .map((item, index) => ({
            ...item,
            position: index,
            before:
              state.profiles[
                index === 0 ? state.profiles.length - 1 : index - 1
              ],
            next: state.profiles[
              state.profiles.length - 1 === index ? 0 : index + 1
            ],
            length: state.profiles.length,
          }))
          .find((profile) => profile.name.toLowerCase() === action.payload) ||
        [];
      return {
        ...state,
        profile,
      };
    case "GET_PHOTOS":
      const photos =
        action.payload.map((item) => ({
          id: item.id,
          media: item.urls.regular,
          orientation: item.width >= item.height ? "landscape" : "portrait",
        })) || [];
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
        action.payload.media.map((item) => ({
          id: item.id,
          media:
            item.video_files.find((video) => video.width === 1920 || 960) || [],
        })) || [];
      return {
        ...state,
        videos,
      };
    default:
      return state;
  }
};

export default reducer;
