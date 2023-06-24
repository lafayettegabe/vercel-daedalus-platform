import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDz8Ef18crSRKdiUakiDRKYEyR6JLnOInY",
    authDomain: "daedalus-a53ad.firebaseapp.com",
    projectId: "daedalus-a53ad",
    storageBucket: "daedalus-a53ad.appspot.com",
    messagingSenderId: "356545693549",
    appId: "1:356545693549:web:d5cd99bbaa79f86bb2bc64",
    measurementId: "G-K5T82N65LN"
};

let analytics;



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }