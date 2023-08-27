import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyDmoTPTVi1jS0IpAOjm18a1b5DwRcnCO6Y",

  authDomain: "linkedin-clone-30029.firebaseapp.com",

  projectId: "linkedin-clone-30029",

  storageBucket: "linkedin-clone-30029.appspot.com",

  messagingSenderId: "970590636292",

  appId: "1:970590636292:web:1680046343d015f4e12851",

  measurementId: "G-7DJHZRM2GB"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };