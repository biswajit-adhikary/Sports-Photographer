// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYxp44TBlHP-svlMsTiwOdJin2zAgT0yk",
    authDomain: "sports-photographer-5c512.firebaseapp.com",
    projectId: "sports-photographer-5c512",
    storageBucket: "sports-photographer-5c512.appspot.com",
    messagingSenderId: "311699812944",
    appId: "1:311699812944:web:92dd9d79be2ce37aa35755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;