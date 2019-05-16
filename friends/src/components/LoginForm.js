import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    } 
}

Render() {
    return (
        <div className="loginForm">
            <input className="login-input" placeholder="username"/>
            <input className="login-input" placeholder="password"/>
            <button>Submit Button</button>
        </div>
    )
}