export const authReducer = (state = {}, action) => {
    switch (action.type) {
    case 'LOGIN':
        return {
            uid: action.uid
        };
    case 'LOGOUT':
        return {};
    default:
        return state;    
    }
};

export const recipesReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_RECIPE':
        return [
            ...state,
            action.recipe,
        ];
    case 'ADD_RECIPES':
        return [
            ...state,
            ...action.recipes
        ];
    case 'DELETE_RECIPE':
        return state.filter((recipe) => {
            return recipe.id !== action.id;
        });
    case 'LOGOUT':
        return [];
    default: 
        return state;
    }
};