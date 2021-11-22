// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
 import   'firebase/firestore'
    import 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVhJEdv_vG_PMzD-LnK3gwR8ZHt7C2YiU",
  authDomain: "chatapp-4341e.firebaseapp.com",
  databaseURL: "https://chatapp-4341e-default-rtdb.firebaseio.com",
  projectId: "chatapp-4341e",
  storageBucket: "chatapp-4341e.appspot.com",
  messagingSenderId: "964119153742",
  appId: "1:964119153742:web:f79253349d4d97ece5c71f",
  measurementId: "G-V8316EN6XY"
};
 

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
 const app = firebase.initializeApp(firebaseConfig);
  app.firestore().settings({timestampsInSnapshots : true,merge: true})
   

  export default app
// const analytics = getAnalytics(app);