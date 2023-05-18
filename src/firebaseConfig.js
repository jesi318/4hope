// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZSCLQo7G4D4AvjTtfPHFNVPAGnGThq7U",
  authDomain: "hope-5479b.firebaseapp.com",
  projectId: "hope-5479b",
  storageBucket: "hope-5479b.appspot.com",
  messagingSenderId: "457342149062",
  appId: "1:457342149062:web:cfd74026ad16c9de6ad2c7",
  measurementId: "G-FWHR0KT686",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, app };
