import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  enableIndexedDbPersistence,
  // onSnapshot,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_APP_ID,
  measurementId: process.env.FIREBASE_API_MEASSUREMENT_ID,
});

const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log(
      "Multiple tabs open, persistence can only be enabled in one tab at a a time..."
    );
  } else if (err.code === "unimplemented") {
    console.log(
      "The current browser does not support all of the features required to enable persistence..."
    );
  }
});

export const getMedia = async (col, lim) => {
  const photosCollection = query(
    collection(db, col),
    orderBy("position", "asc"),
    limit(lim)
  );
  // onSnapshot(photosCollection, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //       console.log("New city: ", change.doc.data());
  //     }

  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log(`Data came from ${source}`);
  //   });
  // });
  const photosSnapshots = await getDocs(photosCollection);
  const photosList = photosSnapshots.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return photosList;
};

export const loadCover = async (col, value) => {
  const mediaDoc = query(collection(db, col), where("isCover", "==", value));
  const docSnapshot = await getDocs(mediaDoc);
  // onSnapshot(mediaDoc, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //       console.log("New city: ", change.doc.data());
  //     }

  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log(`Data came from ${source}`);
  //   });
  // });
  const docList = docSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return docList;
};
