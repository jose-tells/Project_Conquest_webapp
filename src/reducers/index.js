const normalizer = (payload) =>
  payload.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.filename,
    media: item.fileUrl,
    position: item.position,
    orientation:
      item.dimensions.width >= item.dimensions.height
        ? "landscape"
        : "portrait",
  })) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "FIND_VIDEO":
      return {
        ...state,
        player:
          state.videos.find((items) => items.id === Number(action.payload)) ||
          [],
      };
    case "GET_PROFILES":
      return {
        ...state,
        profiles: action.payload,
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload || [],
      };
    case "GET_PHOTO":
      return {
        ...state,
        photo: action.payload || {},
      };
    case "GET_PHOTOS":
      const photos = normalizer(action.payload);
      return {
        ...state,
        photos,
      };
    case "GET_ILLUSTRATIONS":
      const illustrations = normalizer(action.payload);
      return {
        ...state,
        illustrations,
      };
    case "GET_VIDEO":
      return {
        ...state,
        player:
          action.payload.find((item) =>
            item.title.toLowerCase().includes("project conquest")
          ) || [],
      };
    case "GET_VIDEOS":
      return {
        ...state,
        videos:
          action.payload.filter(
            (item) => !item.title.toLowerCase().includes("project conquest")
          ) || [],
      };
    default:
      return state;
  }
};

export default reducer;
