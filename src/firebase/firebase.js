import firebase from '../secrets/config';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const settings = { timestampsInSnapshots: true };

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const database = firebase.firestore()
database.settings(settings);

export const storage = firebase.storage()