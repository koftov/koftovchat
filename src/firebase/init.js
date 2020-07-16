import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyC6d3z-L-_xCUx5b5-krMRWIQzrqHh8-P0",
  authDomain: "koftovchat.firebaseapp.com",
  databaseURL: "https://koftovchat.firebaseio.com",
  projectId: "koftovchat",
  storageBucket: "koftovchat.appspot.com",
  messagingSenderId: "66400556015",
  appId: "1:66400556015:web:7b46dec61f5bf66f225c1a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
