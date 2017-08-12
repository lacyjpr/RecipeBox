import React from 'react';
import {connect} from 'react-redux';

import { startLogin } from './../actions/authActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this); 
    }

    handleLogin() {
        let {dispatch} = this.props;

        dispatch(startLogin());
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

export default connect(state => {
    state.auth
})(Login);
