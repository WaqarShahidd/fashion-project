// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDmToVm6qqv9zeKLsfkPBcn41_XwT8nE",
  authDomain: "fashion-project-29686.firebaseapp.com",
  projectId: "fashion-project-29686",
  storageBucket: "fashion-project-29686.appspot.com",
  messagingSenderId: "198133095010",
  appId: "1:198133095010:web:6535293ae5248070310f3b",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app= firebase.app()
}
const auth = firebase.auth();

export {auth}
