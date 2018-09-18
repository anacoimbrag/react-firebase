import firebase from '../secrets/config';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/messaging';

const settings = { timestampsInSnapshots: true };

export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const database = firebase.firestore()
database.settings(settings);

export const storage = firebase.storage()

export const messaging = firebase.messaging()
messaging.usePublicVapidKey('BPNyuB2UWtuDupQlkBfp2gemw0YXFXU3n0gPdkNkkeXevE127rEnXfIE6aj6I8Iul3vH2WtcsF29kBvVkAlpqGc');