import firebase, {firebaseAuth, googleProvider} from './../firebase/';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export function startLogin() {
    console.log('startLogin');
    return (dispatch, getState) => {
        console.log('return dispatch etc');
        return firebase.auth().signInWithPopup(googleProvider).then((result) =>{
            console.log('Auth worked!', result);
            dispatch(login(result.user.uid));
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
            dispatch(logout());
        });
    };
};