import * as firebase from "firebase";

export default class Firebase {
  static initialise() {
    firebase.initializeApp({
      apiKey: "AIzaSyAOaP-b1kD8UFtinFikLNKtBxgOpMaAN8g",
      authDomain: "todoapp-efa9e.firebaseapp.com",
      databaseURL: "https://todoapp-efa9e.firebaseio.com",
      projectId: "todoapp-efa9e",
      storageBucket: "todoapp-efa9e.appspot.com",
      messagingSenderId: "247036756920"
    });
  }
}
