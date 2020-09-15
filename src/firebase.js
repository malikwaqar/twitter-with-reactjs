import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBgLTt795BNKU0wxSgniZabpgrA-1fGYVs",
    authDomain: "twitter-with-reactjs.firebaseapp.com",
    databaseURL: "https://twitter-with-reactjs.firebaseio.com",
    projectId: "twitter-with-reactjs",
    storageBucket: "twitter-with-reactjs.appspot.com",
    messagingSenderId: "122466279988",
    appId: "1:122466279988:web:b31d6f5f3abf8cc03be061",
    measurementId: "G-T5T8B07S3H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  export default db;