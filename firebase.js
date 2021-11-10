import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC_1wRPPqvum4QBZd5CeH_af3SkpNeSy6g",
  authDomain: "hroapp-d72fc.firebaseapp.com",
  projectId: "hroapp-d72fc",
  storageBucket: "hroapp-d72fc.appspot.com",
  messagingSenderId: "64303262637",
  appId: "1:64303262637:web:aa72d16b3cc68e89ed0f24"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
