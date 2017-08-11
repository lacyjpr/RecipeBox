import React from 'react';
import * as Redux from 'react-redux';
import {connect} from 'react-redux';

import * as actions from './../actions/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this); 
    }

    handleLogin() {
        //let {dispatch} = this.props;

        this.props.dispatch(actions.startLogin);
    }

    render() {
        return(
            <div>
                <h1>Recipe Box</h1>
                <button type='button' onClick={this.handleLogin}>Login with Google</button>
            </div>
            
        );
    }
}

export default connect()(Login);
