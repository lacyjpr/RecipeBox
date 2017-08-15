import React from 'react';
import {connect} from 'react-redux';

import ViewRecipe from './ViewRecipe';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRecipe: false
        };

        this.renderRecipe = this.renderRecipe.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            showRecipe: !this.state.showRecipe
        });
    }

    renderRecipe = () => {
        let {recipeName, imageURL} = this.props;
        console.log(recipeName);
        if (imageURL.length > 0){
            return (
                <div onClick={this.handleClick}>
                    <img src={imageURL} alt="Serving Suggestion"/>
                    <h4>{recipeName}</h4>
                </div>
            );
        } else {
            return (
                <div onClick={this.handleClick}>
                    <h4>{recipeName}</h4>
                </div>
            );
        }
    }

    render() {
        let {recipeName, imageURL, ingredients, directions} = this.props;
        return (
            <div>
                {this.renderRecipe()}
                <ViewRecipe show={this.state.showRecipe} onClose={this.handleClick} recipeName={recipeName} imageURL={imageURL} ingredients={ingredients} directions={directions}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Recipe);