import { EventSourcePolyfill } from "event-source-polyfill";
import firebase from "firebase";
import { baseurl } from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyD0FZVbfQpoG-uIJknq0AkAtauyKs5and8",
  authDomain: "yardcan-84fcd.firebaseapp.com",
  projectId: "yardcan-84fcd",
  storageBucket: "yardcan-84fcd.appspot.com",
  messagingSenderId: "915696776734",
  appId: "1:915696776734:web:e955c4ea189179998fe00f",
  measurementId: "G-3G4Q0Q9QCY",
};

firebase.initializeApp(firebaseConfig);

export const message = firebase.messaging();
