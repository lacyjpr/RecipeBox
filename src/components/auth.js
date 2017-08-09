import {firebaseAuth, googleProvider} from 'firebase';

export function googleLogin() {
    return firebaseAuth().signInWithPopup(googleProvider);
}

export function logout() {
    return firebaseAuth().signOut();
}