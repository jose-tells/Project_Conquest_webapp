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
        profile: action.payload || {},
      };
    case "GET_PHOTO":
      return {
        ...state,
        photo: action.payload.find((item) => item.isCover) || {},
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
      const player =
        {
          id: action.payload.id,
          dimensions: {
            width: action.payload.width,
            height: action.payload.height,
          },
          media: action.payload.video_files.find(
            (video) => video.width === 1920
          )?.link,
        } || {};
      return {
        ...state,
        player,
      };
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload || [],
      };
    case "GET_VIDEOS_THUMBNAILS":
      return {
        ...state,
        videosThumbnails: action.payload || [],
      };
    case "ON_COMPLETE":
      return {
        ...state,
        keyStates: {
          loading: false,
          complete: true,
          error: false,
        },
      };
    case "ON_LOADING":
      return {
        ...state,
        keyStates: {
          loading: true,
          complete: false,
          error: false,
        },
      };
    case "ON_ERROR":
      return {
        ...state,
        keyStates: {
          loading: false,
          complete: true,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
