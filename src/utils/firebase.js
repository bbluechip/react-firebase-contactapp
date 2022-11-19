import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMsbHlXDR2cUQgJaxqeqhe9BESDwATRHo",
  authDomain: "fire-contact-project-124d1.firebaseapp.com",
  databaseURL: "https://fire-contact-project-124d1-default-rtdb.firebaseio.com",
  projectId: "fire-contact-project-124d1",
  storageBucket: "fire-contact-project-124d1.appspot.com",
  messagingSenderId: "733600272274",
  appId: "1:733600272274:web:0b1db6c42714f7bc927b4b",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
