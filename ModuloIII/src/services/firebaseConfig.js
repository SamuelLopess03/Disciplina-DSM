import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBVAIssfr8ebOl7l59px7z0LRjijGqlfWM",
  authDomain: "filmesapp-mobile.firebaseapp.com",
  projectId: "filmesapp-mobile",
  storageBucket: "filmesapp-mobile.appspot.com",
  messagingSenderId: "358497033798",
  appId: "1:358497033798:web:c3dc937ce01060486db447"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const filmesCollectionRef = collection(db, "Filmes");