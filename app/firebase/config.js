import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeebSVmTPoiYZ_yyEtvVNzZiOTPK02RXA",
  authDomain: "stockit-ai-auth.firebaseapp.com",
  projectId: "stockit-ai-auth",
  storageBucket: "stockit-ai-auth.appspot.com",
  messagingSenderId: "1037554339952",
  appId: "1:1037554339952:web:bed0c908602305e16c64b5",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
