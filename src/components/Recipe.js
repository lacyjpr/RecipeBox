import React from 'react';
import {connect} from 'react-redux';

import ViewRecipe from './ViewRecipe';
import EditRecipe from './EditRecipe';
import './Recipe.css';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRecipe: false,
            editRecipe: false
        };

        this.renderRecipe = this.renderRecipe.bind(this);
        this.toggleShowRecipe = this.toggleShowRecipe.bind(this);
        this.toggleEditRecipe = this.toggleEditRecipe.bind(this);
    }

    toggleShowRecipe() {
        this.setState({
            showRecipe: !this.state.showRecipe
        });
    }

    toggleEditRecipe() {
        this.setState({
            editRecipe: !this.state.editRecipe
        });
    }

    renderRecipe = () => {
        let {recipeName, imageURL} = this.props;
        if (imageURL.length > 0){
            return (
                <div className="recipe-card" onClick={this.toggleShowRecipe}>
                    <img src={imageURL} alt="Serving Suggestion" width={200} height={200}/>
                    <h4>{recipeName}</h4>
                </div>
            );
        } else {
            return (
                <div className="recipe-card" onClick={this.toggleShowRecipe}>
                    <h4>{recipeName}</h4>
                </div>
            );
        }
    }

    render() {
        let {id, recipeName, imageURL, ingredients, directions} = this.props;
        return (
            <div>
                {this.renderRecipe()}
                <ViewRecipe show={this.state.showRecipe} onEdit={this.toggleEditRecipe} onClose={this.toggleShowRecipe} id={id} recipeName={recipeName} imageURL={imageURL} ingredients={ingredients} directions={directions}/>
                <EditRecipe show={this.state.editRecipe} onClose={this.toggleEditRecipe} id={id} recipeName={recipeName} imageURL={imageURL} ingredients={ingredients} directions={directions}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Recipe);