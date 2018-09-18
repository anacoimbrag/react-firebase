import firebase from '../secrets/config';

export const firebaseProvider = firebase.auth.FacebookAuthProvider
export const googleProvider = firebase.auth.GoogleAuthProvider

export const auth = firebase.auth()
export const database = firebase.firestore()
export const storage = firebase.storage()