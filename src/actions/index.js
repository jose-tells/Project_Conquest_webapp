import axios from "axios";

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

export const getAPIPhotos = (url, userId, ACCESS_KEY) => (dispatch) => {
  axios({
    url: `${url}/users/${userId}/photos?client_id=${ACCESS_KEY}`,
    method: "get",
  })
    .then(({ data }) => dispatch(getPhotos(data)))
    .catch((err) => console.error(err));
};

export const getAPIVideo = (url, videoId, API_KEY) => (dispatch) => {
  axios({
    url: `${url}/videos/videos/${videoId}`,
    method: "get",
    headers: { Authorization: API_KEY },
  })
    .then(({ data }) => {
      const { video_files } = data;
      dispatch(getVideo(video_files));
    })
    .catch((err) => console.error(err));
};

export const getAPIVideos =
  (url, collectionId, pages, API_KEY) => (dispatch) => {
    axios({
      url: `${url}/v1/collections/${collectionId}?per_page=${pages}`,
      method: "get",
      headers: { Authorization: API_KEY },
    })
      .then(({ data }) => dispatch(getVideos(data)))
      .catch((err) => console.error(err));
  };
