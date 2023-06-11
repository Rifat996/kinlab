
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBd71oD5GW1pREX0Fhbjkqt7oojgQwiLDo",
  authDomain: "kinlab-project.firebaseapp.com",
  projectId: "kinlab-project",
  storageBucket: "kinlab-project.appspot.com",
  messagingSenderId: "561753897835",
  appId: "1:561753897835:web:7881568dd4aba8a4ac6a2e",
  measurementId: "G-7G14KNX66F"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
