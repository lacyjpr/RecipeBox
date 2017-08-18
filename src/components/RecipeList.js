import React from 'react';
import {connect} from 'react-redux';

import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends React.Component {
    render() {
        let {recipes} = this.props;
        let renderRecipes = () => {
            if (recipes.length === 0) {
                return (
                    <div id='no-recipes'>
                        <p>No Recipes Yet!</p>
                    </div>
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
        );
        

    }
}

export default connect(
    (state) => {
        return state;
    }
)(RecipeList);