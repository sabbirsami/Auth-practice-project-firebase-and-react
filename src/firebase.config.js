import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.KEY_APIKEY);
const firebaseConfig = {
    apiKey: "AIzaSyC1IiuWrREwwBIgX-jvQuLGI7i8CRg54ss",
    authDomain: "best-event-planner.firebaseapp.com",
    projectId: "best-event-planner",
    storageBucket: "best-event-planner.appspot.com",
    messagingSenderId: "778489870700",
    appId: "1:778489870700:web:5a8c120501c26f1d705b49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
