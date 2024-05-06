/* import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)

export { app } */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIHLORPusI66TM5AK5X_yLsJA2JlLmLfU",
  authDomain: "camtlead-nextjs.firebaseapp.com",
  projectId: "camtlead-nextjs",
  storageBucket: "camtlead-nextjs.appspot.com",
  messagingSenderId: "738666534927",
  appId: "1:738666534927:web:b2478ea370fa1a7b4beb7a",
  measurementId: "G-E43EDPQ6FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }