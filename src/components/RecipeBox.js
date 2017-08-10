import React from 'react';
import {firebaseAuth} from './firebase/';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        return firebaseAuth().signOut();
    }

    render() {
        return(
            <div>
                <h1>Recipe Box Component</h1>
                <button type='button' onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}

export default RecipeBox;