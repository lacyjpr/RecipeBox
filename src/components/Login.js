import React from 'react';
import {firebaseAuth, googleProvider} from './firebase/';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this); 
    }

    componentWillMount(){
        console.log('componentWillMount', this.props.auth);
        if (this.props.auth) {
            this.props.history.push('/recipebox');
        } else {
            this.props.history.push('/login');
        }
    }

    handleLogin() {
        return firebaseAuth().signInWithPopup(googleProvider).then((result) => {
            this.props.action();
            console.log('Auth worked!', result);
            this.props.history.push('/recipebox');
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
