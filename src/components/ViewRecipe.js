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
                   <img src={this.props.imageURL} alt="Serving Suggestion" width={128} height={128}/> 
                }
                <h4>Ingredients:</h4>
                <p>{this.props.ingredients}</p>
                <h4>Directions:</h4>
                <p>{this.props.directions}</p>
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

