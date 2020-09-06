import * as firebase from 'firebase';
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig={
    apiKey: "AIzaSyAKwn_FOgtvjfoMKDQXOFpWwYsYdF2OPDI",
    authDomain: "note-app-ffb24.firebaseapp.com",
    databaseURL: "https://note-app-ffb24.firebaseio.com",
    projectId: "note-app-ffb24",
    storageBucket: "note-app-ffb24.appspot.com",
    messagingSenderId: "313609083312",
    appId: "1:313609083312:web:bf65e87aa43af1ff761e75"

}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};