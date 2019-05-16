import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">

        <h1 className="title">My Title</h1>
        <nav className="nav-links">
          <NavLink exact to="/login">Login</NavLink>

        </nav>
        <Route path="/login" render={props => <LoginForm />} />
      </div>
    );
  }
}

export default App;
