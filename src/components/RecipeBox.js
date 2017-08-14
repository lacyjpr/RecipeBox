import React from 'react';
import {connect} from 'react-redux';

import {startLogout} from './../actions/actions';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addRecipeOpen: false
        };

        this.handleLogout = this.handleLogout.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleLogout() {
        const {dispatch} = this.props;

        dispatch(startLogout());
    }

    handleAdd() {
        this.setState({
            addRecipeOpen: !this.state.addRecipeOpen
        });
    }

    render() {
        return(
            <div>
                <h1>Recipes</h1>
                <RecipeList/>
                <button type='button' onClick={this.handleLogout}>Logout</button>
                <button type='button' onClick={this.handleAdd}>Add Recipe</button>
                <AddRecipe show={this.state.addRecipeOpen} onClose={this.handleAdd}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(RecipeBox);