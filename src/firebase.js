// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;

const firebaseConfig = {
    apiKey: "AIzaSyDk3XCd2ui5T9Pch3NGjNONMehkYBDYoCA",
    authDomain: "facebook-clone-app-27.firebaseapp.com",
    projectId: "facebook-clone-app-27",
    storageBucket: "facebook-clone-app-27.appspot.com",
    messagingSenderId: "161009794776",
    appId: "1:161009794776:web:0de364816797e17ea9a1ad",
    measurementId: "G-QNSSMNBR1F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
//initialize db

const db = firebaseApp.firestore() ;
export const auth = firebase.auth() ;

  //this will tell firbase that we need to initialize google auth provider
 export  const provider = new firebase.auth.GoogleAuthProvider() ;

  
export default db ;
