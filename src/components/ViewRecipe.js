import React from 'react';
import {connect} from 'react-redux';

import './ViewRecipe.css';
import {startDeleteRecipe} from './../actions/actions';

class ViewRecipe extends React.Component{
    render() {
        const {dispatch} = this.props;
        if (!this.props.show) {
            return null;
        }
        
        return(
        <div className="view-backdrop">
            <div className="view-modal">
                <h3>{this.props.recipeName}</h3>
                {this.props.imageURL.length > 0 &&
                   <img src={this.props.imageURL} className="img" alt="Serving Suggestion" width={128} height={128}/> 
                }
                <h4>Ingredients:</h4>
                <p className="view-ingredients">{this.props.ingredients}</p>
                <h4>Directions:</h4>
                <p className="view-directions">{this.props.directions}</p>
                <button onClick={this.props.onEdit}>Edit</button>
                <button onClick={() => {
                    dispatch(startDeleteRecipe(this.props.id));
                }}>Delete</button>
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

