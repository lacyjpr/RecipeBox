import firebase, {firebaseRef, googleProvider} from './../firebase/';

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

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
            dispatch(logout());
        });
    };
};

export const addRecipe = (recipe) => {
    return {
        type: 'ADD_RECIPE',
        recipe
    };
};

export const startAddRecipe = (recipeName, imageURL, ingredients, directions) => {
    return (dispatch, getState) => {
        const recipe = {
            recipeName,
            imageURL,
            ingredients,
            directions
        };
        const {uid} = getState();
        console.log(uid);
        const recipeRef = firebaseRef.child(`users/${uid}/recipes`).push(recipe);

        return recipeRef.then(() => {
            dispatch(addRecipe({
                ...recipe,
                id: recipeRef.key
            }));
        });
    };
};
