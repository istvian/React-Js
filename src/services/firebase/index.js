import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNHkBquI5vJhWXoJbogQ8ZhS66iao_H9k",
  authDomain: "reactjscoder-604e9.firebaseapp.com",
  projectId: "reactjscoder-604e9",
  storageBucket: "reactjscoder-604e9.appspot.com",
  messagingSenderId: "74883547235",
  appId: "1:74883547235:web:6c742537e138dcf736b856",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
