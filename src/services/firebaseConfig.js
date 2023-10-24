import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl4edpUk6tmI22cLNN3MnvAX0iBHGxdHo",
  authDomain: "tde-mobile-ea749.firebaseapp.com",
  databaseURL: "https://tde-mobile-ea749-default-rtdb.firebaseio.com",
  projectId: "tde-mobile-ea749",
  storageBucket: "tde-mobile-ea749.appspot.com",
  messagingSenderId: "437733419379",
  appId: "1:437733419379:web:888c766220a15e3b44fd06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);