import React from 'react';
import {connect} from 'react-redux';

import Recipe from './Recipe';

class RecipeList extends React.Component {
    render() {
        let {recipes} = this.props;
        console.log(typeof recipes);
        let parsedRecipes = [];
        Object.keys(recipes).forEach((recipeId) => {parsedRecipes.push({...recipes[recipeId], id: recipeId});});
        console.log(typeof parsedRecipes);
        console.log(parsedRecipes);
        let renderRecipes = () => {
            if (parsedRecipes.length === 0) {
                return (
                    <p>No Recipes Yet!</p>
                );
            } else {
                return parsedRecipes.map((recipe) => {
                    return (
                        <Recipe key={recipe.id} {...recipe}/>
                    );
                });
            }
            
        };
        return (
            <div>
                {renderRecipes()}
            </div>
        )
        

    }
}

export default connect(
    (state) => {
        return state;
    }
)(RecipeList);