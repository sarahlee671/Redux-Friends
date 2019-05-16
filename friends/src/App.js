import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from '../src/components/FriendsList';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <div className="App">

      <h1 className="title">My Title</h1>
      <nav className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
      </nav>
    

      <Route path="/login" component={LoginForm} />
      <PrivateRoute exact path ="/protected" component={FriendsList} />

    </div>
  );

}

export default App;
