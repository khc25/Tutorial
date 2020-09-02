import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCSoqNvyLHKIWa3NCagDV4yGNmOorXCu70",
    authDomain: "uploadexample-d9678.firebaseapp.com",
    databaseURL: "https://uploadexample-d9678.firebaseio.com",
    projectId: "uploadexample-d9678",
    storageBucket: "uploadexample-d9678.appspot.com",
    messagingSenderId: "188412857999",
    appId: "1:188412857999:web:51a3fe13f8a8e74c202afa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }