import { storage } from "../firebase/firebase";

export const uploadFile = async (id, file) =>
    await storage.ref(`${id}.jpg`).put(file).then()

export const getUrl = async id =>
    await storage.ref(`${id}.jpg`).getDownloadURL()