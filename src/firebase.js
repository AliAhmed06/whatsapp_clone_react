import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAY2xbTwOaHEKptp94tdBl24AR6XUlxQaM",
    authDomain: "whatsapp-clone-d8647.firebaseapp.com",
    projectId: "whatsapp-clone-d8647",
    storageBucket: "whatsapp-clone-d8647.appspot.com",
    messagingSenderId: "953223194927",
    appId: "1:953223194927:web:6fbaa24dbe35e36ab3d9da"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // This is for google authentication

export { auth, provider };
export default db;