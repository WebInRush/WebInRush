import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjDZdVHq5DTOY3lFNPGHLie4vHSGcgpHA",
  authDomain: "webinrush.firebaseapp.com",
  projectId: "webinrush",
  storageBucket: "webinrush.appspot.com",
  messagingSenderId: "84632647662",
  appId: "1:84632647662:web:41d28605bf7d9bd9a000ff",
  measurementId: "G-HSCJFEFRCN",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
