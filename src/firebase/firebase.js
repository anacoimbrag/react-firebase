import firebase from '../secrets/config';

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const database = firebase.firestore()
export const storage = firebase.storage()