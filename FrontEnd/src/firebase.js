import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDlCRlk8QTeiNbFexHFRTExepMx4A3qOsQ",
	authDomain: "clone-977b7.firebaseapp.com",
	projectId: "clone-977b7",
	storageBucket: "clone-977b7.appspot.com",
	messagingSenderId: "632219022837",
	appId: "1:632219022837:web:433ec447801da1dc855cbc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
