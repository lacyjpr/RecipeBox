import React from 'react';
import {connect} from 'react-redux';

import Recipe from './Recipe';

class RecipeList extends React.Component {
    render() {
        let {recipes} = this.props;
        let renderRecipes = () => {
            if (recipes.length === 0) {
                return (
                    <p>No Recipes Yet!</p>
                );
            } else {
                return recipes.map((recipe) => {
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