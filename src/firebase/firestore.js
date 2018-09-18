import { database } from "./firebase";

export const observeTasks = (onComplete) => {
    database.collection('tasks').onSnapshot(snap => {
        const tasks = snap.docs.map(doc => { return { ...doc.data(), id: doc.id } })
        onComplete(tasks)
    })
}

export const createTask = async (task) =>
    await database.collection('tasks').add(task)

export const changeTask = async (id, pending) =>
    await database.collection('tasks').doc(id).update({ pending })