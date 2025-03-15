import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {API_KEY, PROJECT_ID, BUCKET, SENDER_ID, APP_ID} from "@env"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: PROJECT_ID,
  storageBucket: BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);