
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhfZd6st_ejGAmzWrXZheDO-MrMjnRd6U",
  authDomain: "fluid-emissary-384220.firebaseapp.com",
  projectId: "fluid-emissary-384220",
  storageBucket: "fluid-emissary-384220.appspot.com",
  messagingSenderId: "837851953572",
  appId: "1:837851953572:web:54a316c8677f719e1d6931",
  measurementId: "G-96NYPSB8GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle  = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
            console.log(result);
    })
    .catch((error) => {
        console.log(error)
    });

};