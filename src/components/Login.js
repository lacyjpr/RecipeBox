import React from 'react';
import {connect} from 'react-redux';

import { startLogin } from './../actions/actions';

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
    return {auth: state.auth};
})(Login);
