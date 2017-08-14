import React from 'react';
import {connect} from 'react-redux';

import Recipe from './Recipe';

class RecipeList extends React.Component {
    render() {
        let {recipes} = this.props;
        console.log(recipes);
        let parsedRecipes = [];
        Object.keys(recipes).forEach((id) => {parsedRecipes.push({...recipes[id], id: id})});
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