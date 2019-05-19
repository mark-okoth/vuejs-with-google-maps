import firebase from 'firebase/app';
import 'firebase/firestore';
  
  
  var firebaseConfig = {
    apiKey: "AIzaSyDdj8Ga2gsvFmGiV11KKCurNufe_iIPBog",
    authDomain: "geolocater-f3c8c.firebaseapp.com",
    databaseURL: "https://geolocater-f3c8c.firebaseio.com",
    projectId: "geolocater-f3c8c",
    storageBucket: "geolocater-f3c8c.appspot.com",
    messagingSenderId: "860295495411",
    appId: "1:860295495411:web:0d227a65e1b4450b"
  };
      // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
  
 firebaseApp.firestore().settings({  })


 export default firebaseApp.firestore()