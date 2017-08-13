//Modal credit: https://daveceddia.com/open-modal-in-react/

import React from 'react';
import {connect} from 'react-redux';

import './AddRecipe.css';
import * as actions from './../actions/actions';

class AddRecipe extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let recipeName = this.refs.recipeName.value;
        let imageURL = this.refs.imageURL.value;
        let ingredients = this.refs.ingredients.value.replace(/\n/g, '<br/>');
        let directions = this.refs.directions.value.replace(/\n/g, '<br/>');

        if (recipeName.length > 0) {
            this.refs.recipeName.value = '';
            this.refs.imageURL.value = '';
            this.refs.ingredients.value = '';
            this.refs.directions.value = '';
            dispatch(actions.startAddRecipe)(recipeName, imageURL, ingredients, directions);
        }
    }

    render() {

        if (!this.props.show) {
            return null;
        }

        return(
            <div className="backdrop">
                <div className="modal">
                    <h3>Add Recipe</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" ref="recipeName" placeholder="Recipe Name"/>
                        </div>
                        <div>
                            <input type="text" ref="imageURL" placeholder="Image URL"/>
                        </div>
                        <div>
                            <label htmlFor="ingreds">Ingredients:</label>
                            <textarea id="ingreds" ref="ingredients"/>
                        </div>
                        <div>
                            <label htmlFor="instructions">Directions:</label>
                            <textarea id="instructions" ref="directions"/>
                        </div>
                         
                        <button>Add Recipe</button>
                    </form>
                    <div className="footer">
                        <button onClick={this.props.onClose}>Close</button>
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
)(AddRecipe);