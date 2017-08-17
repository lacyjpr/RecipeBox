import React from 'react';
import {connect} from 'react-redux';

import './Login.css';
import {startLogin} from './../actions/actions';


class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this); 
    }

    handleLogin() {
        const {dispatch} = this.props;

        dispatch(startLogin());
    }

    render() {
        return(
            <div className="sign-in-box">
                <h1>Recipe Box</h1>
                <button type='button' className="sign-in" onClick={this.handleLogin}>Sign in with Google</button>
            </div>
            
        );
    }
}

export default connect(
    (state) => {
        return state.auth;
    }
)(Login);
