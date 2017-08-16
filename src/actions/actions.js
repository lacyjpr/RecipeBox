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

export const addRecipes = (recipes) => {
    return {
        type: 'ADD_RECIPES',
        recipes
    };
};

export const startAddRecipes = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const todosRef = firebaseRef.child(`users/${uid}/recipes`);

        return todosRef.once('value').then((snapshot) => {
            const recipes = snapshot.val() || {};
            const parsedRecipes = [];

            Object.keys(recipes).forEach((recipeId) => {
                parsedRecipes.push({
                    id: recipeId,
                    ...recipes[recipeId]
                });
            });

            dispatch(addRecipes(parsedRecipes));
        });
    };
};

export const updateRecipe = (id, updates) => {
    return {
        type: 'UPDATE_RECIPE',
        id,
        updates
    };
};

export const startSaveEditedRecipe = (id, recipeName, imageURL, ingredients, directions) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/recipes/${id}`);
        const updates = {
            recipeName,
            imageURL,
            ingredients, 
            directions
        };

        return recipeRef.update(updates).then(() => {
            dispatch(updateRecipe(id, updates));
        });
    };
};

export const deleteRecipe = (id) => {
    return {
        type: 'DELETE_RECIPE',
        id
    };
};

export const startDeleteRecipe = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const recipeRef = firebaseRef.child(`users/${uid}/recipes/${id}`);
        return recipeRef.remove().then(() => {
            dispatch(deleteRecipe(id));
        });
    };
};


