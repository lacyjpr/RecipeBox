import React from 'react';
import {connect} from 'react-redux';

import {startLogout} from './../actions/actions';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleLogout() {
        const {dispatch} = this.props;

        dispatch(startLogout());
    }

    handleAdd() {
        this.props.history.push('/addrecipe');
    }

    render() {
        return(
            <div>
                <h1>Recipe Box Component</h1>
                <button type='button' onClick={this.handleLogout}>Logout</button>
                <button type='button' onClick={this.handleAdd}>Add Recipe</button>
            </div>
        );
    }
}

export default connect()(RecipeBox);