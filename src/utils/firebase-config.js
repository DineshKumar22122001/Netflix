import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4hSCCPGnIVUv6qLaFdRVB0xwAsmjLyRc",
  authDomain: "react-netflix-clone-70863.firebaseapp.com",
  projectId: "react-netflix-clone-70863",
  storageBucket: "react-netflix-clone-70863.appspot.com",
  messagingSenderId: "1025356134197",
  appId: "1:1025356134197:web:42da80b0fb4a013120fe7c"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app)