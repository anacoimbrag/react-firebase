import { auth, facebookProvider, googleProvider } from "./firebase";

export const login = async ({ email, password }) => {
    const userCredentials = await auth.signInWithEmailAndPassword(email, password)
    return userCredentials.user
}

export const facebookLogin = async () => {
    const userCredentials = await auth.signInWithPopup(facebookProvider)
    return userCredentials.user
}

export const googleLogin = async () => {
    const userCredentials = await auth.signInWithPopup(googleProvider)
    return userCredentials.user
}

export const logout = async () => await auth.signOut()

export const register = async ({ displayName, email, password }) => {
    const userCredentials = await auth.createUserWithEmailAndPassword(email, password)
    await userCredentials.user.updateProfile({ displayName })
    return userCredentials.user
}