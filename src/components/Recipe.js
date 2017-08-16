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
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState({
            showRecipe: !this.state.showRecipe
        });
    }

    renderRecipe = () => {
        let {recipeName, imageURL} = this.props;
        console.log(recipeName);
        if (imageURL.length > 0){
            return (
                <div onClick={this.toggleShow}>
                    <img src={imageURL} alt="Serving Suggestion" width={128} height={128}/>
                    <h4>{recipeName}</h4>
                </div>
            );
        } else {
            return (
                <div onClick={this.toggleShow}>
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
                <ViewRecipe show={this.state.showRecipe} onClose={this.toggleShow} id={id} recipeName={recipeName} imageURL={imageURL} ingredients={ingredients} directions={directions}/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Recipe);