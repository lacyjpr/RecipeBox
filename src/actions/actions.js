import firebase, {googleProvider} from './../firebase/';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const startLogin = () => {
    return function(dispatch) {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) =>{
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
    return (dispatch) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
            dispatch(logout());
        });
    };
};