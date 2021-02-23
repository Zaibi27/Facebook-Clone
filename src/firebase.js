// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;

// paste here the firebaseConfig from the firebase SDK snippet
const firebaseConfig = {
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
//initialize db

const db = firebaseApp.firestore() ;
export const auth = firebase.auth() ;

  //this will tell firbase that we need to initialize google auth provider
 export  const provider = new firebase.auth.GoogleAuthProvider() ;

  
export default db ;
