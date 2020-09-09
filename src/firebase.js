import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXv_A-XBG-s-mJT_C_z1Lregt6OHHqZlY",
  authDomain: "clone-d0afb.firebaseapp.com",
  databaseURL: "https://clone-d0afb.firebaseio.com",
  projectId: "clone-d0afb",
  storageBucket: "clone-d0afb.appspot.com",
  messagingSenderId: "489925905977",
  appId: "1:489925905977:web:681280c9eab2e2d61c07e8",
  measurementId: "G-H7YVBQEFQE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
