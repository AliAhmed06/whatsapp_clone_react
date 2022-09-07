import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAY2xbTwOaHEKptp94tdBl24AR6XUlxQaM",
    authDomain: "whatsapp-clone-d8647.firebaseapp.com",
    projectId: "whatsapp-clone-d8647",
    storageBucket: "whatsapp-clone-d8647.appspot.com",
    messagingSenderId: "953223194927",
    appId: "1:953223194927:web:6fbaa24dbe35e36ab3d9da"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;