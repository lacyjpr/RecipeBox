import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.renderRecipe = this.renderRecipe.bind(this);
    }

    renderRecipe = () => {
        let {recipeName, imageURL} = this.props;
        console.log(recipeName);
        if (imageURL.length > 0){
            return (
                <div >
                    <img src={imageURL} alt="Serving Suggestion"/>
                    <h4>{recipeName}</h4>
                </div>
            );
        } else {
            return (
                <div>
                    <h4>{recipeName}</h4>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderRecipe()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Recipe);