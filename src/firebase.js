import firebase from "firebase/compat/app";
// import "firebase/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {API_KEY, AUTH_DOMAIN, STORAGE_BUCKET, PROJECT_ID, APP_ID, MEASUREMENT_ID, MESSAGING_SENDER_ID } from "./keys";

//we selcted  config in firebase and copied all this. These are the keys which will help us connect to database
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

//initialize the app using firebaseConfig
const firebaseApp = firebase.initializeApp(firebaseConfig);
//this variable  will act as a firebase instance......basically its our database
const db = firebaseApp.firestore();
//authentication handler....this will be responsible for when we come to do our authentication part
const auth = getAuth(firebaseApp);
//for google authentication.....this is what we are gonna use when we actually go ahead and do that google authentication
const provider = new GoogleAuthProvider();

export { auth, provider };
// we are gonna use the db most that's why default export
export default db;
