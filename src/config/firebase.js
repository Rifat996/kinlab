
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
 X
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
