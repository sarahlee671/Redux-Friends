import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    } 
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitLogin = e => {
        e.preventDefault();
        this.props.login({username: this.state.username, password: this.state.password});
        this.setState({ username: '', password: ''});
    };


    Render() {
        return (
            <div className="loginForm">
                <input type="text" name="username" value={this.state.username} placeholder="username"/>
                <input type="text" name="password" value={this.state.password} placeholder="password"/>
                <button>Submit Button</button>
            </div>
        )
    }
}

export default LoginForm;