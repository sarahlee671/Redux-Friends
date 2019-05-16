import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from '../src/components/FriendsList'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <h1 className="title">My Title</h1>
        <nav className="nav-links">
          <NavLink exact to="/login">Login</NavLink>

        </nav>
        {/* <LoginForm /> */}
        <FriendsList />
        
        <Route path="/login" component={LoginForm} />
        {/* <PrivateRoute exact path ="/protected" component={FriendsListView} /> */}
         
      </div>
    );
  }
}

export default App;
