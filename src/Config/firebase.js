
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDxMb7bxHpf6yH-jkIBZJVtkZ77RgbxH68",
  authDomain: "car-rental-d2818.firebaseapp.com",
  projectId: "car-rental-d2818",
  storageBucket: "car-rental-d2818.appspot.com",
  messagingSenderId: "972814796593",
  appId: "1:972814796593:web:8d84c6e41110825cc25210"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db= getFirestore(app)
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {

    signInWithPopup(auth,provider).then((result)=>{
        window.location.href= '/'
     

    }).catch((error)=>{
        console.log(error)
    })

}