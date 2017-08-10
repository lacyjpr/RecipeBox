import React from 'react';
import {firebaseAuth, googleProvider} from './firebase/';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this); 
    }

    handleLogin() {
        return firebaseAuth().signInWithPopup(googleProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to authenticate', error);
        });
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

export default Login;
