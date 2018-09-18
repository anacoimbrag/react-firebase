import { messaging } from "./firebase";

export const requestPermission = async () =>
    await messaging.requestPermission()

export const getToken = async () =>
    await messaging.getToken()

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
});