import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGIvQWBw0HkJWO75IQL7EB4Zc5nHF0Bv0",
  authDomain: "login-page-7ac70.firebaseapp.com",
  projectId: "login-page-7ac70",
  storageBucket: "login-page-7ac70.appspot.com",
  messagingSenderId: "1095630076289",
  appId: "1:1095630076289:web:b20fc09740679320549080",
  measurementId: "G-E5JNS1HJQL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
