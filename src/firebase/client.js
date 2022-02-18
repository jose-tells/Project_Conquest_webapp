import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp(
  JSON.parse(process.env.FIREBASE_CREDENTIALS)
);
