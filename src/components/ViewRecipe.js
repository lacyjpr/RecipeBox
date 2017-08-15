import React from 'react';
import {connect} from 'react-redux';

import './ViewRecipe.css';

class ViewRecipe extends React.Component{
    render() {
        if (!this.props.show) {
            return null;
        }
        
        return(
        <div className="backdrop">
            <div className="modal">
                <h3>{this.props.recipeName}</h3>
                {this.props.imageURL.length > 0 &&
                   <img src={this.props.imageURL} alt="Serving Suggestion"/> 
                }
                <h4>Ingredients:</h4>
                {this.props.ingredients}
                <h4>Directions:</h4>
                {this.props.directions}
                <button onClick={this.props.onClose}>Close</button>
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

