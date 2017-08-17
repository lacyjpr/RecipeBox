import React from 'react';
import {connect} from 'react-redux';

import './RecipeBox.css';
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
            <div className="recipe-box">
                <h1>Recipe Box</h1>
                <RecipeList/>
                <AddRecipe show={this.state.addRecipeOpen} onClose={this.handleAdd}/>
                <div className="footer">
                    <div>
                        <button type='button' className="add-recipe" onClick={this.handleAdd}>Add Recipe</button>
                    </div>
                    <div>
                        <button type='button' className="log-out" onClick={this.handleLogout}>Logout</button>
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(RecipeBox);