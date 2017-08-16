import React from 'react';
import {connect} from 'react-redux';

import './AddRecipe.css';
import {startSaveEditedRecipe} from './../actions/actions';

class EditRecipe extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let recipeName = this.refs.recipeName.value;
        let imageURL = this.refs.imageURL.value;
        let ingredients = this.refs.ingredients.value;
        let directions = this.refs.directions.value;

        if (recipeName.length > 0) {
            this.refs.recipeName.value = '';
            this.refs.imageURL.value = '';
            this.refs.ingredients.value = '';
            this.refs.directions.value = '';
            dispatch(startSaveEditedRecipe(this.props.id, recipeName, imageURL, ingredients, directions));
            this.props.onClose();
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
                            <input type="text" ref="recipeName" defaultValue={this.props.recipeName}/>
                        </div>
                        <div>
                            <input type="text" ref="imageURL" defaultValue={this.props.imageURL}/>
                        </div>
                        <div>
                            <label htmlFor="ingreds">Ingredients:</label>
                            <textarea id="ingreds" ref="ingredients">{this.props.ingredients}</textarea>
                        </div>
                        <div>
                            <label htmlFor="instructions">Directions:</label>
                            <textarea id="instructions" ref="directions">{this.props.directions}</textarea>
                        </div>
                         
                        <button>Save</button>
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
)(EditRecipe);