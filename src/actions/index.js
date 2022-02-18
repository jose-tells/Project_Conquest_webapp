import { app } from "../firebase/client";

export const findPhoto = (payload) => ({
  type: "FIND_PHOTO",
  payload,
});

export const findVideo = (payload) => ({
  type: "FIND_VIDEO",
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

export const getAPIMedia = (collection, dispatchAction) => (dispatch) => {
  app
    .firestore()
    .collection(collection)
    .get()
    .then(({ docs }) => {
      const docsList = docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(dispatchAction(docsList));
    })
    .catch(console.error);
};

export const getSpecificMedia =
  (collection, param, value, dispatchAction) => (dispatch) => {
    app
      .firestore()
      .collection(collection)
      .get()
      .then(({ docs }) => {
        const docsList = docs
          .map((doc, index) => ({
            ...doc.data(),
            next: docs[index === docs.length - 1 ? 0 : index + 1]?.data(),
            id: doc.id,
          }))
          .find((doc) => doc[param].toLowerCase() === value);
        dispatch(dispatchAction(docsList));
      })
      .catch(console.error);
  };
