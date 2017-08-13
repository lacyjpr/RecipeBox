//Add modal credit: https://daveceddia.com/open-modal-in-react/

import React from 'react';
import './AddRecipe.css';

class AddRecipe extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return(
            <div className="backdrop">
                <div className="modal">
                    <h3>Add Recipe</h3>
                    <div className="footer">
                        <button onClick={this.props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRecipe;