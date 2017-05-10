import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBlIgYSvK9CnDC2F_DR-wB2l-iphkflULc",
    authDomain: "alfred-todo-app.firebaseapp.com",
    databaseURL: "https://alfred-todo-app.firebaseio.com",
    projectId: "alfred-todo-app",
    storageBucket: "alfred-todo-app.appspot.com",
    messagingSenderId: "1038267635039"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Alfred Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Talon',
    age: 27
  }
});





