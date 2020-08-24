import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnX7itp9wLeKhCDeloxNWCyyxF9VZVzsU",
  authDomain: "ecommerce-923fd.firebaseapp.com",
  databaseURL: "https://ecommerce-923fd.firebaseio.com",
  projectId: "ecommerce-923fd",
  storageBucket: "ecommerce-923fd.appspot.com",
  messagingSenderId: "377118664706",
  appId: "1:377118664706:web:e728e8c4d5c6c3691adf1b",
  measurementId: "G-GBN05RR8JT"
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      console.log("user created");
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
