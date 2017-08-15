import React from 'react';
import {connect} from 'react-redux';

import './ViewRecipe.css';

class ViewRecipe extends React.Component{
    render() {
        if (!this.props.show) {
            return null;
        }
        let {recipeName, imageURL, ingredients, directions} = this.props;
        console.log(recipeName, imageURL, ingredients, directions);
        
        return(
        <div className="backdrop">
            <div className="modal">
                <h3>{recipeName}</h3>
                {imageURL &&
                   <img src={imageURL} alt="Serving Suggestion"/> 
                }
                <h3>Ingredients:</h3>
                <p>{ingredients}</p>
                <h3>Directions:</h3>
                <p>{directions}</p>
            </div>
        </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }    
)(ViewRecipe);

