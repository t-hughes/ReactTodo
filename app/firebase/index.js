import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBlIgYSvK9CnDC2F_DR-wB2l-iphkflULc",
    authDomain: "alfred-todo-app.firebaseapp.com",
    databaseURL: "https://alfred-todo-app.firebaseio.com",
    projectId: "alfred-todo-app",
    storageBucket: "alfred-todo-app.appspot.com",
    messagingSenderId: "1038267635039"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;