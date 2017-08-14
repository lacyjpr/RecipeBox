import firebase, {firebaseRef, googleProvider} from './../firebase/';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};

export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) =>{
            console.log('Auth worked!', result);
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
    return () => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out!');
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
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/recipes`).push(recipe);

        return recipeRef.then(() => {
            dispatch(addRecipe({
                ...recipe,
                id: recipeRef.key
            }));
        });
    };
};
