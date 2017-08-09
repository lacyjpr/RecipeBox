import firebase from 'firebase';

try {
    const config = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    };
    
    firebase.initializeApp(config);
} catch (e) {

}

//export var githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseRef = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export default firebase;