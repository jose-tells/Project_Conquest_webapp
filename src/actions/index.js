import { getMedia, loadCover } from "../firebase/client";

export const findPhoto = (payload) => ({
  type: "FIND_PHOTO",
  payload,
});

export const findVideo = (payload) => ({
  type: "FIND_VIDEO",
  payload,
});

export const getPhoto = (payload) => ({
  type: "GET_PHOTO",
  payload,
});

export const getPhotos = (payload) => ({
  type: "GET_PHOTOS",
  payload,
});

export const getIllustrations = (payload) => ({
  type: "GET_ILLUSTRATIONS",
  payload,
});

export const getVideo = (payload) => ({
  type: "GET_VIDEO",
  payload,
});

export const getVideos = (payload) => ({
  type: "GET_VIDEOS",
  payload,
});

export const getProfile = (payload) => ({
  type: "GET_PROFILE",
  payload,
});

export const getProfiles = (payload) => ({
  type: "GET_PROFILES",
  payload,
});

export const onComplete = (payload) => ({
  type: "ON_COMPLETE",
  payload,
});

export const onLoading = (payload) => ({
  type: "ON_LOADING",
  payload,
});

export const onError = (payload) => ({
  type: "ON_ERROR",
  payload,
});

export const getAPIPhotos = (limit) => (dispatch) => {
  getMedia("Photos", limit)
    .then((docs) => {
      dispatch(getPhotos(docs));
      dispatch(onComplete());
    })
    .catch(() => dispatch(onError()));
};

export const getAPIIllustrations = (limit) => (dispatch) => {
  getMedia("Illustrations", limit)
    .then((docs) => {
      dispatch(getIllustrations(docs));
      dispatch(onComplete());
    })
    .catch(() => dispatch(onError()));
};

export const getAPIVideoCover =
  (API_URL, API_KEY, VIDEO_COVER_ID) => (dispatch) => {
    fetch(`${API_URL}/videos/videos/${VIDEO_COVER_ID}`, {
      headers: { Authorization: API_KEY },
    })
      .then((data) => data.json())
      .then((result) => {
        dispatch(getVideo(result));
        dispatch(onComplete());
      })
      .catch(() => dispatch(onError()));
  };

export const getAPIVideos = (limit) => (dispatch) => {
  getMedia("Videos", limit)
    .then((videos) => dispatch(getVideos(videos)))
    .then(() => dispatch(onComplete()))
    .catch(console.error);
};

export const getAPIPhotoCover = (collection) => (dispatch) => {
  loadCover(collection, true)
    .then((docs) => {
      dispatch(getPhoto(docs));
      dispatch(onComplete());
    })
    .catch(() => dispatch(onError()));
};

export const getAPIProfiles = () => (dispatch) => {
  getMedia("Profiles")
    .then((docs) => {
      dispatch(getProfiles(docs));
      dispatch(onComplete());
    })
    .catch(() => dispatch(onError()));
};

export const getAPIProfile = (name) => (dispatch) => {
  getMedia("Profiles")
    .then((docs) => {
      const normalized = docs
        .map((doc, index) => ({
          ...doc,
          next: docs[index === docs.length - 1 ? 0 : index + 1],
        }))
        .find((doc) => doc.title.toLowerCase() === name.toLowerCase());
      dispatch(getProfile(normalized));
      !normalized ? dispatch(onError()) : dispatch(onComplete());
    })
    .catch(() => dispatch(onError()));
};
