import React from 'react';
import {connect} from 'react-redux';

import './EditRecipe.css';
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
            <div className="edit-backdrop">
                <div className="edit-modal">
                    <h3>Add Recipe</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" className="edit-input" ref="recipeName" defaultValue={this.props.recipeName}/>
                        </div>
                        <div>
                            <input type="text" className="edit-input" ref="imageURL" defaultValue={this.props.imageURL}/>
                        </div>
                        <div>
                            <label htmlFor="edit-ingreds">Ingredients:</label>
                            <textarea id="edit-ingreds" ref="ingredients">{this.props.ingredients}</textarea>
                        </div>
                        <div>
                            <label htmlFor="edit-instructions">Directions:</label>
                            <textarea id="edit-instructions" ref="directions">{this.props.directions}</textarea>
                        </div>
                         
                        <button className="edit-save-btn">Save</button>
                    </form>
                    <div className="edit-footer">
                        <button className="edit-close-btn" onClick={this.props.onClose}>Close</button>
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