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
            <div className="big-title">
                <h1>Recipe Box</h1>
                <div className="sign-in-box">
                    <h1>Sign In</h1>
                    <h4>Sign in with Google account below</h4>
                    <button type='button' className="sign-in" onClick={this.handleLogin}>Sign in with Google</button>
                </div>
            </div>
            
        );
    }
}

export default connect(
    (state) => {
        return state.auth;
    }
)(Login);
