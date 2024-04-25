import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseApiKey = process.env.FIREBASE_API_KEY
const firebaseAuthDomain = process.env.AUTH_DOMAIN
const firebaseProjectId = process.env.PROJECT_ID
const firebaseStorageBucket = process.env.STORAGE_BUCKET
const firebaseMessageSenderId = process.env.MESSAGE_SENDER_ID
const firebaseAppId = process.env.APP_ID

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessageSenderId,
  appId: firebaseAppId,
};

const app = initializeApp(firebaseConfig);
