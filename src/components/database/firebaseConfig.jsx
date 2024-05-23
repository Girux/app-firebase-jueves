import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7mKwwSVbQgEz1_LG0i1DOrK9qBo4Ciek",
  authDomain: "app-firebase-jueves-e9ea7.firebaseapp.com",
  projectId: "app-firebase-jueves-e9ea7",
  storageBucket: "app-firebase-jueves-e9ea7.appspot.com",
  messagingSenderId: "961910691423",
  appId: "1:961910691423:web:cf2fe0868f9c4c37706dea"
};
const app = initializeApp(firebaseConfig);
export const connDatabase = getFirestore(app)