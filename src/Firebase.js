import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB25gJKjhssaejBTekelmH8btJkFU278ZA",
    authDomain: "discord-clone-a8aa9.firebaseapp.com",
    projectId: "discord-clone-a8aa9",
    storageBucket: "discord-clone-a8aa9.appspot.com",
    messagingSenderId: "478629983841",
    appId: "1:478629983841:web:77db820a4bdc497a1d9c20",
    measurementId: "G-KREQZT85WH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
